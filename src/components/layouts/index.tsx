import { cn } from "@/lib/utils"

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Container({ className, ...props }: LayoutProps) {
   return (
      <section className={cn("bg-white shadow-xl rounded-xl p-8", className)} {...props} />
   )
}