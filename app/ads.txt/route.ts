const ADS_TXT = `google.com, pub-4145901573793792, DIRECT, f08c47fec0942fa0
`;

export async function GET() {
  return new Response(ADS_TXT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
