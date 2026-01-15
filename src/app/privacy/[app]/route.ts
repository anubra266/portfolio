import { NextRequest } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET(
    request: NextRequest,
    { params }: { params: { app: string } }
) {
    const { app } = params;

    // Sanitize the app name to prevent directory traversal
    const sanitizedApp = app.replace(/[^a-zA-Z0-9_-]/g, '');

    if (!sanitizedApp) {
        return new Response('Invalid app name', { status: 400 });
    }

    const filePath = join(process.cwd(), 'public', 'privacy-policies', `${sanitizedApp}.html`);

    // Check if the file exists
    if (!existsSync(filePath)) {
        return new Response('Privacy policy not found', { status: 404 });
    }

    try {
        const content = readFileSync(filePath, 'utf8');

        return new Response(content, {
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'public, max-age=86400', // Cache for 1 day
            },
        });
    } catch (error) {
        return new Response('Error reading privacy policy', { status: 500 });
    }
}