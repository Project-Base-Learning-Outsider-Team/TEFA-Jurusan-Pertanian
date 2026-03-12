import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Buat akun Anda</CardTitle>
          <CardDescription>
            Masukkan email Anda di bawah ini untuk membuat akun baru
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nama Lengkap</FieldLabel>
                <Input id="name" type="text" placeholder="Budi Santoso" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@contoh.com"
                  required
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Kata Sandi</FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Konfirmasi Kata Sandi
                    </FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>
                  Minimal harus 8 karakter.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" className="w-full">Daftar Sekarang</Button>
                <FieldDescription className="text-center">
                  Sudah punya akun? <a href="/sign-in" className="underline">Masuk</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center text-xs">
        Dengan mengklik lanjut, Anda menyetujui <a href="#" className="underline">Ketentuan Layanan</a>{" "}
        dan <a href="#" className="underline">Kebijakan Privasi</a> kami.
      </FieldDescription>
    </div>
  )
}