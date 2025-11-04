'use client';

import { useEffect, useRef, useState } from 'react';

export default function CaptchaModal({ pdfUrl, title, children }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const widgetRef = useRef(null);
  const grecaptchaId = useRef(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!open) return;

    // Load reCAPTCHA script and wait until grecaptcha.render is available.
    // This uses the v2 checkbox (challenge) flow. We load the script without
    // the `render=explicit` param and poll until `grecaptcha.render` exists.
    async function loadReCaptchaAndRender() {
      if (!window.grecaptcha || typeof window.grecaptcha.render !== 'function') {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        // Wait (poll) until grecaptcha.render is available
        const maxAttempts = 50;
        let attempts = 0;
        await new Promise((resolve, reject) => {
          const iv = setInterval(() => {
            attempts += 1;
            if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
              clearInterval(iv);
              resolve(true);
            } else if (attempts >= maxAttempts) {
              clearInterval(iv);
              reject(new Error('grecaptcha.load.timeout'));
            }
          }, 100);
        });
      }

      renderWidget();
    }

    loadReCaptchaAndRender().catch((err) => {
      console.error('reCAPTCHA load/render error', err);
    });

    return () => {
      try {
        if (grecaptchaId.current != null && window.grecaptcha?.reset) {
          // reset() accepts an optional widget id in some implementations
          window.grecaptcha.reset(grecaptchaId.current);
        }
      } catch (e) {
        // ignore cleanup errors
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function renderWidget() {
    if (!window.grecaptcha || !widgetRef.current || grecaptchaId.current != null) return;

    try {
      grecaptchaId.current = window.grecaptcha.render(widgetRef.current, {
        sitekey: siteKey,
        theme: 'light',
        callback: onVerify,
      });
    } catch (e) {
      console.error('reCAPTCHA render error', e);
    }
  }

  async function onVerify(token) {
    setLoading(true);
    try {
      const res = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (data.success) {
        // Reset widget and cleanup before opening PDF
        try {
          if (window.grecaptcha && grecaptchaId.current != null) {
            window.grecaptcha.reset(grecaptchaId.current);
            grecaptchaId.current = null;
          }
        } catch (e) {
          console.error('Error resetting reCAPTCHA:', e);
        }
        
        window.open(pdfUrl, '_blank', 'noopener');
        setOpen(false);
      } else {
        alert('La vérification reCAPTCHA a échoué. Veuillez réessayer.');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la vérification.');
    } finally {
      setLoading(false);
      // reset the widget so user can try again if needed
      try {
        if (window.grecaptcha && grecaptchaId.current != null) {
          window.grecaptcha.reset(grecaptchaId.current);
        }
      } catch (e) {}
    }
  }

  return (
    <>
      <button
        onClick={() => {
          // Reset widget ID to force fresh render
          grecaptchaId.current = null;
          setOpen(true);
        }}
        className="block w-full text-left"
        aria-haspopup="dialog"
      >
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold">Vérification</h3>
            <p className="text-sm text-gray-600 mt-2">Pour accéder "{title}", veuillez compléter la vérification reCAPTCHA ci-dessous.</p>

            <div className="mt-4 flex justify-center">
              {siteKey ? (
                <div ref={widgetRef} />
              ) : (
                <div className="text-sm text-red-500">La clé reCAPTCHA n'est pas configurée. Contactez l'administrateur.</div>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => {
                  // Reset widget when modal is closed
                  try {
                    if (window.grecaptcha && grecaptchaId.current != null) {
                      window.grecaptcha.reset(grecaptchaId.current);
                      grecaptchaId.current = null;
                    }
                  } catch (e) {
                    console.error('Error resetting reCAPTCHA:', e);
                  }
                  setOpen(false);
                }}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                disabled={loading}
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  // If the widget supports execute (invisible reCAPTCHA), run it.
                  // For challenge-based checkbox (v2), prompt the user to interact with the widget.
                  try {
                    if (
                      window.grecaptcha &&
                      typeof window.grecaptcha.execute === 'function' &&
                      grecaptchaId.current != null
                    ) {
                      window.grecaptcha.execute(grecaptchaId.current);
                    } else {
                      // For checkbox reCAPTCHA, the user must click the checkbox.
                      alert('Veuillez cocher la case reCAPTCHA dans la fenêtre ci-dessus pour continuer.');
                    }
                  } catch (e) {
                    console.error('reCAPTCHA execute error', e);
                    alert('Erreur reCAPTCHA. Veuillez compléter la vérification manuellement.');
                  }
                }}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? 'Vérification...' : 'Vérifier et télécharger'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
