import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <Link href="/">
            <Image
              src="/heydev-logo-quick.png"
              alt="HeyDev Advocate Logo"
              width={600}
              height={200}
              className="h-40 w-auto -ml-6 -mt-10"
            />
        </Link>
      </div>
    </header>
  )
}
