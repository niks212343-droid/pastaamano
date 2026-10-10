import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Pasta a Mano — ir para a página inicial"
      className={cn('group block overflow-hidden', className)}
    >
      <div className="relative h-full w-full min-w-[152px] overflow-hidden">
        <Image
          src="/images/files_12108936-2026-10-10T06-27-53-598Z-6300361f-5d64-4628-b5fb-b85fb6cefe73.webp"
          alt="Pasta a Mano — cozinha autoral"
          width={1024}
          height={1024}
          priority
          className="absolute left-1/2 top-1/2 h-[245%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </Link>
  );
}
