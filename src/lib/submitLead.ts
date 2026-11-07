// Общо изпращане на запитвания от всички форми в сайта.
// Запитванията се приемат от Formspree и се препращат на имейла,
// който е настроен във Formspree акаунта (трябва да е ddconstruction988@gmail.com).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqqznry';

export const LEAD_ERROR_MESSAGE =
  'Неуспешно изпращане. Моля, опитайте отново или се обадете на +359 878 827 128.';

export interface SubmitLeadResult {
  ok: boolean;
  error?: string;
}

export async function submitLead(
  subject: string,
  fields: Record<string, string | number | null | undefined>
): Promise<SubmitLeadResult> {
  // Празните полета не се изпращат (Formspree отхвърля празен имейл)
  const payload: Record<string, string> = {};
  Object.entries(fields).forEach(([key, value]) => {
    if (value !== null && value !== undefined && String(value).trim() !== '') {
      payload[key] = String(value).trim();
    }
  });

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: subject,
        ...payload,
        source: typeof window !== 'undefined' ? window.location.href : 'unknown',
      }),
    });

    if (res.ok) {
      return { ok: true };
    }

    let data: any = null;
    try {
      data = await res.json();
    } catch {
      data = null;
    }

    return {
      ok: false,
      error: data?.errors?.[0]?.message || data?.error || LEAD_ERROR_MESSAGE,
    };
  } catch {
    return { ok: false, error: LEAD_ERROR_MESSAGE };
  }
}
