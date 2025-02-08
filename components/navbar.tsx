import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">SaaS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              기능
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              요금제
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              소개
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">로그인</Button>
            <Button>무료로 시작하기</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  기능
                </Link>
                <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  요금제
                </Link>
                <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  소개
                </Link>
                <hr className="my-4" />
                <Button variant="ghost">로그인</Button>
                <Button>무료로 시작하기</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 