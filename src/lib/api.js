const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000/api').replace(/\/$/, '')

export async function apiRequest(path, {token, ...options} = {}) {
    const headers = new Headers(options.headers)
    if (options.body && !(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json')
    }
    if (token) {
        headers.set('Authorization', `Bearer ${token}`)
    }

    const response = await fetch(`${API_BASE_URL}${path}`, {...options, headers})
    const body = response.status === 204 ? null : await response.json()
    if (!response.ok) {
        const detail = body?.error ?? body?.detail
        const issues = Array.isArray(body?.details) ? body.details : Array.isArray(detail) ? detail : []
        const issueMessages = issues
            .map((issue) => typeof issue === 'string' ? issue : issue.message)
            .filter(Boolean)
        const message = typeof detail === 'string'
            ? `${detail}${issueMessages.length ? `: ${issueMessages.join('; ')}` : ''}`
            : issueMessages.join('; ') || 'The request could not be completed.'
        throw new Error(message)
    }
    return body
}
