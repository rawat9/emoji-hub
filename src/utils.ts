export function request<TResponse>(url: string, config: RequestInit): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

export function transformHtmlCodeToUnicode(htmlCode: string): string {
  return String.fromCodePoint(parseInt(htmlCode.replace('&#', '').replace(';', '')));
}
