import Head from 'next/head'

export default function Home() {
  return (
    /**
     * Welcome app
     */
    <div className="flex flex-row items-center min-h-screen">
      <div className="container mx-auto">
        <h1 className="self-center text-5xl font-bold text-gray-700">Welcome <span className="text-indigo-700">NextJs</span> !</h1>
        <h3 className="self-center text-xl font-light text-blue-700">Javascript Front-End Framework For <span className="font-bold text-indigo-700">ReactJs</span> </h3>
      </div>
    </div>
  )
}
