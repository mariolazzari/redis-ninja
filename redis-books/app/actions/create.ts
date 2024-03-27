'use server'
import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

type Book = {
    title: string;
    rating: number;
    author: string;
    blurb: string
}

export async function createBook(formData: FormData) {
    const { title, rating, author, blurb } = Object.fromEntries(formData) as unknown as Book

    // create a book id
    const id = Math.floor(Math.random() * 100000)

    // add the book to the sorted set
    const unique = await client.zAdd('books', {
        value: title,
        score: id
    }, { NX: true })

    if (!unique) {
        return {
            error: 'That book has already been added.'
        }
    }

    // save new hash for the book
    await client.hSet(`books:${id}`, {
        title,
        rating,
        author,
        blurb
    })

    redirect('/')
}