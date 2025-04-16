import { PrismaClient } from "@prisma/client";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET: Retorna todos os usuários
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST: Cria um novo usuário
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newUser = await prisma.user.create({
      data: body,
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

// PUT: Atualiza um usuário existente
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updatedData } = body;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatedData,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

// DELETE: Remove um usuário
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '', 10);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json(deletedUser);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}