import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dashvin
      </h1>
      <p className="mb-4">
        {`Welcome to the place for continuous learning and brewing thoughts ☕️`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
