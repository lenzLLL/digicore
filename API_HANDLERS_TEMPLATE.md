/**
 * Template pour créer des route handlers API avec Next.js
 * Remplace les endpoints Hono du projet
 */

import { NextRequest, NextResponse } from 'next/server';

// ============================================
// EXEMPLE: Route GET simple
// ============================================

// Fichier: src/app/api/items/route.ts
export async function GET(request: NextRequest) {
  try {
    // Récupérer les query params
    const searchParams = request.nextUrl.searchParams;
    const skip = searchParams.get('skip') || '0';
    const take = searchParams.get('take') || '10';

    // Appel à votre base de données ou service
    const items = await getItemsFromDB(parseInt(skip), parseInt(take));

    return NextResponse.json({ data: items }, { status: 200 });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// ============================================
// EXEMPLE: Route POST avec validation
// ============================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || typeof body.name !== 'string') {
      return NextResponse.json(
        { error: 'Le champ "name" est requis' },
        { status: 400 }
      );
    }

    // Créer l'item
    const newItem = await createItemInDB(body.name);

    return NextResponse.json(
      { data: newItem, message: 'Item créé avec succès' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// ============================================
// EXEMPLE: Route avec paramètre dynamique
// ============================================

// Fichier: src/app/api/items/[id]/route.ts
interface Params {
  id: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { id } = params;

    // Récupérer l'item
    const item = await getItemFromDB(id);

    if (!item) {
      return NextResponse.json(
        { error: 'Item non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: item });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { id } = params;
    const body = await request.json();

    // Mettre à jour l'item
    const updatedItem = await updateItemInDB(id, body);

    return NextResponse.json({ data: updatedItem });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { id } = params;

    // Supprimer l'item
    await deleteItemFromDB(id);

    return NextResponse.json(
      { message: 'Item supprimé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// ============================================
// EXEMPLE: Route avec middleware/authentification
// ============================================

// Fichier: src/app/api/admin/route.ts
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    // Vérifier les permissions
    if (session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Accès refusé' },
        { status: 403 }
      );
    }

    // Votre logique ici
    const data = await getAdminData();

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// ============================================
// EXEMPLE: Route avec streaming
// ============================================

export async function GET_STREAM(request: NextRequest) {
  try {
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();

    // Simuler un stream de données
    (async () => {
      try {
        const items = await getItemsFromDB(0, 100);

        for (const item of items) {
          await writer.write(
            new TextEncoder().encode(JSON.stringify(item) + '\n')
          );
          // Petite pause pour simuler un processus lent
          await new Promise((resolve) => setTimeout(resolve, 10));
        }
      } finally {
        await writer.close();
      }
    })();

    return new Response(readable, {
      headers: {
        'Content-Type': 'application/x-ndjson',
      },
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// ============================================
// PLACEHOLDER FUNCTIONS (À implémenter)
// ============================================

async function getItemsFromDB(skip: number, take: number) {
  // TODO: Implémenter votre logique de base de données
  return [];
}

async function getItemFromDB(id: string) {
  // TODO: Implémenter
  return null;
}

async function createItemInDB(name: string) {
  // TODO: Implémenter
  return { id: '1', name };
}

async function updateItemInDB(id: string, data: any) {
  // TODO: Implémenter
  return data;
}

async function deleteItemFromDB(id: string) {
  // TODO: Implémenter
}

async function getAdminData() {
  // TODO: Implémenter
  return {};
}
