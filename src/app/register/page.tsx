"use client"
import Link from "next/link"
import React, { useState } from "react"
import InlineAlert from "@/components/InlineAlert"

export default function Register() {
	const [firstname, setFirstname] = useState<string>("")
	const [lastname, setLastname] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [rePassword, setRePassword] = useState<string>("")
	const [isError, setIsError] = useState<boolean>(false)

	const SubmitFormRegister = async (e: any) => {
		e.preventDefault()
		console.log(firstname, lastname, email, password, rePassword)
	}

	return (
		<>
			<main className="flex items-center w-full justify-center">
				<form className="card rounded shadow-md bg-base-100 w-6/12">
					<div className="card-body">
						<h1 className="card-title">สมัครสมาชิก</h1>
						<hr />

						{/* Alert */}
						{isError && <InlineAlert title="lorem" type={1} />}

						<div className="gap-4 flex flex-col">
							<input
								type="text"
								name="text"
								className="input input-md input-bordered"
								placeholder="ชื่อจริง"
								required={true}
								onChange={(e) => setFirstname(e.target.value)}
								autoComplete="off"
							/>

							<input
								type="text"
								name="text"
								className="input input-md input-bordered"
								placeholder="นามสกุล"
								required={true}
								onChange={(e) => setLastname(e.target.value)}
								autoComplete="off"
							/>
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

							<input
								type="password"
								name="password"
								className="input input-md input-bordered"
								placeholder="ยืนยันรหัสผ่าน"
								required={true}
								onChange={(e) => setRePassword(e.target.value)}
								autoComplete="off"
							/>

							<button
								type="button"
								onClick={SubmitFormRegister}
								className="btn btn-primary text-white"
							>
								ตกลง
							</button>

							<Link href="/login" className="btn btn-link">
								เข้าสู่ระบบ
							</Link>
						</div>
					</div>
				</form>
			</main>
		</>
	)
}
