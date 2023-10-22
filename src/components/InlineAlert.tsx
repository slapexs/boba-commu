import React, { useState } from "react"
import CheckboxCircleLineIcon from "remixicon-react/CheckboxCircleLineIcon"
import ErrorWarningLineIcon from "remixicon-react/ErrorWarningLineIcon"
import CloseCircleLineIcon from "remixicon-react/CloseCircleLineIcon"

type TAlertProps = {
	type: number
	title: string
}

export default function InlineAlert({ type, title }: TAlertProps) {
	const types = ["alert-success", "alert-warning", "alert-error"]
	const icons = [
		<CheckboxCircleLineIcon />,
		<ErrorWarningLineIcon />,
		<CloseCircleLineIcon />,
	]
	return (
		<>
			<div className={`alert ${types[type]} text-white`}>
				{icons[type]}
				<span>{title}</span>
			</div>
		</>
	)
}
