import React from "react"

type Props = {}

export default function FormEditProfile({}: Props) {
	return (
		<>
			<main className="card bg-base-100 shadow-xl">
				<div className="card-body">
					<h1 className="text-xl font-semibold">แก้ไขโปรไฟล์</h1>

					<section className="mt-5 gap-y-5 grid">
						<div className="grid grid-cols-12 items-center">
							<p className="col-span-2 font-semibold">ชื่อ</p>
							<div className="col-span-10">
								<input
									type="text"
									name="firstname"
									id="firstname"
									className="input input-bordered w-full"
									value="Firstname"
									placeholder="ชื่อจริง"
								/>
							</div>
						</div>

						<div className="grid grid-cols-12 items-center">
							<p className="col-span-2 font-semibold">นามสกุล</p>
							<div className="col-span-10">
								<input
									type="text"
									name="lastname"
									id="lastname"
									className="input input-bordered w-full"
									value="lastname"
									placeholder="นามสกุล"
								/>
							</div>
						</div>

						<div className="grid grid-cols-12 items-center">
							<p className="col-span-2 font-semibold">ชื่อบัญชี</p>
							<div className="col-span-10">
								<input
									type="text"
									name="displayname"
									id="displayname"
									className="input input-bordered w-full"
									value="displayname"
									placeholder="ชื่อบัญชี"
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
