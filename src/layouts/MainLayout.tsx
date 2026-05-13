import Sidebar from "../components/layout/Sidebar"

type Props = {
  children: React.ReactNode
}

export default function MainLayout({
  children,
}: Props) {
  return (
    <div
      className="
        flex
        min-h-screen
        bg-zinc-950
        text-white
      "
    >
      <Sidebar />

      <main
        className="
          flex-1
          p-8
        "
      >
        {children}
      </main>
    </div>
  )
}