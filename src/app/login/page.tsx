"use client"
import Link from "next/link"
import React, { useState } from "react"
import InlineAlert from "@/components/InlineAlert"

export default function Login() {
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [isError, setIsError] = useState<boolean>(false)

	const SubmitFormLogin = async (e: any) => {
		e.preventDefault()
		console.log(email, password)
	}

	return (
		<>
			<main className="flex items-center w-full justify-center">
				<form className="card rounded shadow-md bg-base-100 w-6/12">
					<div className="card-body">
						<h1 className="card-title">เข้าสู่ระบบ</h1>
						<hr />

						{/* Alert */}
						{isError && <InlineAlert title="lorem" type={1} />}

						<input
							type="text"
							name="email"
							className="input input-md input-bordered"
							placeholder="johnza007@email.com"
							required={true}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="off"
						/>

						<input
							type="password"
							name="password"
							className="input input-md input-bordered"
							placeholder="รหัสผ่าน"
							required={true}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="off"
						/>

						<button
							type="button"
							onClick={SubmitFormLogin}
							className="btn btn-primary text-white"
						>
							ตกลง
						</button>

						<Link href="/register" className="btn btn-link">
							สมัครสมาชิก
						</Link>
					</div>
				</form>
			</main>
		</>
	)
}
