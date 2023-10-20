import React from "react"

export default function FormEditPassword() {
	return (
		<>
			<main className="card bg-base-100 shadow-xl">
				<div className="card-body">
					<h1 className="text-xl font-semibold">เปลี่ยนรหัสผ่าน</h1>

					<section className="mt-5 gap-y-5 grid">
						<div className="grid grid-cols-12 items-center">
							<p className="col-span-2 font-semibold">รหัสผ่านปัจจุบัน</p>
							<div className="col-span-10">
								<input
									type="password"
									name="currentPassword"
									id="currentPassword"
									className="input input-bordered w-full"
									placeholder="รหัสผ่านปัจจุบัน"
								/>
							</div>
						</div>

						<div className="grid grid-cols-12 items-center">
							<p className="col-span-2 font-semibold">รหัสผ่านใหม่</p>
							<div className="col-span-10">
								<input
									type="password"
									name="newPassword"
									id="newPassword"
									className="input input-bordered w-full"
									placeholder="รหัสผ่านใหม่"
								/>
							</div>
						</div>

						<div className="grid grid-cols-12 items-center">
							<p className="col-span-2 font-semibold">ยืนยันรหัสผ่านใหม่</p>
							<div className="col-span-10">
								<input
									type="password"
									name="confirmNewPassword"
									id="confirmNewPassword"
									className="input input-bordered w-full"
									placeholder="ยืนยันรหัสผ่านใหม่"
								/>
							</div>
						</div>

						<div className="flex justify-end">
							<button
								type="button"
								className="btn btn-primary text-white w-fit justify-end"
							>
								บันทึก
							</button>
						</div>
					</section>
				</div>
			</main>
		</>
	)
}
