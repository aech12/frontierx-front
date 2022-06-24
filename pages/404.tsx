import type { GetStaticPropsContext } from 'next'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
      <p>Not Found</p>
      <p className="">
        The requested page doesn&apos;t exist or you don&apos;t have access to it.
      </p>
    </div>
  )
}
