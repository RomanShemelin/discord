import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { MemberRole } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();
    const { searchParams } = new URL(req.url);
    const { name, type } = await req.json();
    const serverId = searchParams.get('serverId');

    if (!profile) new NextResponse('Unauthorized', { status: 401 });
    if (!serverId) new NextResponse('Server ID missing', { status: 400 });

    if (name === 'general')
      new NextResponse("Channel name cannot be 'general'", { status: 400 });

    const server = await db.server.update({
      where: {
        id: serverId as string,
        members: {
          some: {
            profileId: profile?.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR],
            },
          },
        },
      },
      data: {
        channels: {
          create: {
            profileId: profile?.id as string,
            name,
            type,
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log('Channel POST', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
