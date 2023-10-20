import React from "react"
import Chat4LineIcon from "remixicon-react/Chat4LineIcon"
import GroupLineIcon from "remixicon-react/GroupLineIcon"
import UserHeartLineIcon from "remixicon-react/UserHeartLineIcon"

type Props = {}

const StatProfile = (props: Props) => {
	return (
		<div className="grid grid-cols-3 gap-x-10">
			<p>
				โพสต์: <strong>123</strong>
			</p>

			<p>
				ผู้ติดตาม: <strong>123</strong>
			</p>

			<p>
				ติดตามอยู่: <strong>123</strong>
			</p>
		</div>
	)
}

export default StatProfile
