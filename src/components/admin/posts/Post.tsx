'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'

import type { IPost } from '@/types/posts'

import { deletePosts } from '@/api/posts'
import { constants } from '@/constants'

import QuestionAlert from '../alerts/QuestionAlert'
import SuccessAlert from '../alerts/SuccessAlert'
import { formatDate } from './dateHelper'

export default function Post({
  id,
  title,
  link,
  created_at,
  text,
  image_url,
  isAdmin,
}: IPost) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const creationDate = formatDate(created_at)

  const client = useQueryClient()

  const mutation = useMutation({
    mutationFn: deletePosts,
    onSuccess: () => {
      setIsSuccess(true)
      client.invalidateQueries({
        queryKey: [constants.posts.FETCH_POSTS],
      })
    },
  })

  const handleDeleteConfirm = async () => {
    setIsDeleting(false)
    try {
      await mutation.mutateAsync(id)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSuccessAlertClose = () => {
    setIsSuccess(false)
    setIsDeleting(false)
  }

  return (
    <article className="relative flex h-[336px] w-[492px]  overflow-hidden rounded-lg bg-black text-white shadow-lg">
      <div className="flex w-1/2 flex-col justify-between p-6">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-center">{title}</h2>
          <p className="text-sm">{text}</p>
        </div>
        <div className="flex items-center justify-between">
          {isAdmin && (
        <div className="absolute bottom-[5px] right-[12px] z-10 flex gap-[24px]">
          <button
            className="flex size-[32px] items-center justify-center bg-white"
            onClick={() => setIsDeleting(true)}
          >
            <svg width={28} height={28}>
              <use href="/Icons/sprite.svg#icon-drop"></use>
            </svg>
          </button>
          <button className="flex size-[32px] items-center justify-center bg-white">
            <Link href={`/admin/posts/edit/${id}`}>
              <svg width={28} height={28}>
                <use href="/Icons/sprite.svg#icon-pen"></use>
              </svg>
            </Link>
          </button>
        </div>
      )}
        </div>
      </div>
      <div
        className="relative w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${image_url})` }}
      >
      </div>
      {isDeleting && !isSuccess && (
        <QuestionAlert
          title="Are you sure you want to delete this post?"
          onCancel={() => setIsDeleting(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
      {isSuccess && (
        <SuccessAlert
          title="Post deleted successfully"
          onClose={handleSuccessAlertClose}
          isSuccess={isSuccess}
        />
      )}
    </article>
  )
}