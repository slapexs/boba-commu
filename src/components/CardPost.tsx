import React from "react"
import avatar from "../../public/favicon.png"
import Image from "next/image"

import ThumbUpLineIcon from "remixicon-react/ThumbUpLineIcon"
import Chat1LineIcon from "remixicon-react/Chat1LineIcon"
import ChatBubbleStart from "./ChatBubbleStart"
import ChatBubbleEnd from "./ChatBubbleEnd"
import SendPlane2LineIcon from "remixicon-react/SendPlane2LineIcon"

type IPost = {
	showComment?: boolean
}

const CardPost = ({ showComment = true }: IPost) => {
	return (
		<>
			<div className="card w-full bg-base-100 shadow-sm border">
				<div className="card-body">
					<div className="grid grid-cols-10 gap-x-4">
						<div className="grid-flow-row-dense">
							<Image
								alt="avatar"
								src={avatar}
								className="bg-primary mask mask-squircle"
							/>
						</div>
						<div className="col-span-9">
							<p className="font-semibold">Profile name</p>
							<p className="font-light text-primary-content ">
								ฮัมเคลื่อนย้าย ฮองเฮาท็อปบูตเลิฟตัวเอง นิรันดร์
								ศากยบุตรคณาญาติสไลด์บาร์บี้โง่เขลา
								เพรียวบางเบญจมบพิตรแรงผลักเอ๋อ เยอบีราเรซินเทเลกราฟโปรเจ็คท์
								ก่อนหน้าโยเกิร์ตผลไม้โก๊ะไฮเปอร์ ไนน์กับดักเคลียร์ซีนซีเรียส
								แซ็กโซโฟนไฮไลต์ โปรเจ็กเตอร์วาทกรรมคาแร็คเตอร์ ดีลเลอร์ ตรวจทาน
								บรรพชนเพรสเบนโลไรเฟิลคีตปฏิภาณ ซูโม่พาวเวอร์โปรโมชั่น
								สึนามิดาวน์คาราโอเกะนางแบบแพนดา เท็กซ์ซังเตแบนเนอร์
							</p>

							<section className="mt-10">
								<div className="flex gap-x-5 items-end">
									<div className="flex gap-x-2">
										<ThumbUpLineIcon
											className="opacity-60 hover:cursor-pointer"
											size={20}
										/>
										<small className="opacity-60">123</small>
									</div>
									<div className="flex gap-x-2">
										<Chat1LineIcon
											className="opacity-60 hover:cursor-pointer"
											size={20}
										/>
										<small className="opacity-60">4</small>
									</div>
									<p className="text-right text-xs opacity-60">20/10/2023</p>
								</div>
							</section>

							{/* Comment */}
							{showComment && (
								<section>
									<div className="divider"></div>
									<ChatBubbleStart
										user="Obi-Wan Kenobi"
										image={avatar}
										comment="แดนซ์ แครอทรีพอร์ท แฮนด์สเปคแฟลชซาบะ"
										time="12:45"
									/>
									<ChatBubbleStart
										user="Obi-Wan Kenobi"
										image={avatar}
										comment="แดนซ์ แครอทรีพอร์ท แฮนด์สเปคแฟลชซาบะ"
										time="12:45"
									/>
									<ChatBubbleStart
										user="Obi-Wan Kenobi"
										image={avatar}
										comment="แดนซ์ แครอทรีพอร์ท แฮนด์สเปคแฟลชซาบะ"
										time="12:45"
									/>

									<ChatBubbleEnd
										user="Obi-Wan Kenobi"
										image={avatar}
										comment="แดนซ์ แครอทรีพอร์ท แฮนด์สเปคแฟลชซาบะ"
										time="12:45"
									/>

									{/* Comment input */}
									<div className="w-full mt-5">
										<div className="join w-full">
											<input
												type="text"
												placeholder="แสดงความคิดเห็น"
												className="w-full input input-md input-bordered join-item"
											/>
											<button className="btn btn-primary text-white join-item rounded-r-full">
												<SendPlane2LineIcon />
											</button>
										</div>
									</div>
								</section>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardPost
