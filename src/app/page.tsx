import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-cyan-500 p-4">
      {/* Main Content */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Main Card */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl py-0">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Left Side - Branding */}
                <div className="p-8 pt-4 pb-4 lg:pt-4 lg:pb-4 lg:p-12 flex flex-col justify-center bg-white">
                  {/* Logo and Title */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <Image src={"/asset/Kemenkeu.png"} alt="Home Logo" priority width={200} height={200} />
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-teal-700 leading-tight text-center">
                      Sistem Rekomendasi
                      <br />
                      Satker Kemenkeu
                    </h2>
                  </div>

                  {/* Illustration */}
                  <div className="flex justify-center mb-8">
                    <Image src={"/asset/home-3.png"} alt="Home Icon" priority width={280} height={280} />
                  </div>

                  {/* Bottom Icons */}
                  <div className="lg:flex justify-center gap-8 hidden">
                    <Image src={"/asset/home-2.png"} alt="Home Icon 2" priority width={75} height={75} />
                    <Image src={"/asset/home-1.png"} alt="Home Icon 3" priority width={75} height={75} />
                  </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-cyan-50 to-cyan-100 flex flex-col justify-center">
                  <div className="max-w-sm mx-auto w-full">
                    {/* Form Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-teal-700 mb-2">Silakan Login 👋 😊</h3>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-teal-700 font-medium">
                          Username
                        </Label>
                        <Input id="username" type="text" placeholder="Username here !!!" className="bg-white/80 border-cyan-200 focus:border-cyan-400 focus:ring-cyan-400 placeholder:text-cyan-300" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-teal-700 font-medium">
                          Password
                        </Label>
                        <Input id="password" type="password" placeholder="Password here !!!" className="bg-white/80 border-cyan-200 focus:border-cyan-400 focus:ring-cyan-400 placeholder:text-cyan-300" />
                        <div className="text-right">
                          <Link href="/forgot-password" className="text-red-500 hover:text-red-600 text-sm font-medium">
                            Lupa password ?
                          </Link>
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 rounded-lg text-lg">
                        Login
                      </Button>
                    </form>

                    {/* Register Link */}
                    <div className="text-center mt-8">
                      <span className="text-teal-700">Silakan login dengan akun yang telah tersedia!.</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
