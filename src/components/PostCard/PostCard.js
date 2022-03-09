import React from "react";
import "./PostCard.scss";

const PostCard = ({ title, worktime, adress, phone, description }) => {
	return (
		<li className="PostCard">
			<h2 className="PostCard__title">{title}</h2>

			{worktime && (
				<div className="PostCard__sm-text">
					<img
						className="PostCard__icon"
						src={process.env.PUBLIC_URL + "clock.svg"}
						alt="icon"
					/>
					{worktime}
				</div>
			)}
			{adress && (
				<div className="PostCard__sm-text PostCard__sm-text--it">
					<img
						className="PostCard__icon"
						src={process.env.PUBLIC_URL + "maps-black.svg"}
						alt="icon"
					/>
					{adress}
				</div>
			)}
			{phone && (
				<span>
					<a className="PostCard__link" href={`tel:${phone}`}>
						<img
							className="PostCard__icon"
							src={process.env.PUBLIC_URL + "phone-call.svg"}
							alt="icon"
						/>
						{phone}
					</a>
				</span>
			)}

			{description && (
				<div className="PostCard__md-text">
					<img
						className="PostCard__icon"
						src={process.env.PUBLIC_URL + "comment.svg"}
						alt="icon"
					/>
					{description}
				</div>
			)}
		</li>
	);
};

export default PostCard;
