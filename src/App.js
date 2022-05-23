import CommentWidget from "./CommentWidget.tsx";

export default function App() {
  return (
    <div className="app p-12">
      <h1 className="leading-snug text-lg text-gray-700 font-semibold">Comment Thread Component</h1>
      <div className="mt-8" />
      <CommentWidget />
    </div>
  )
}