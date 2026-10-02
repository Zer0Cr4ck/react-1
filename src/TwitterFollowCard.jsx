import { useState } from "react";
export function TwitterFollowCard({
  children,
  userName = "Unknown",
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  // const state = useState(false);
  // const isFollowingState = state[0];
  // const setIsFollowing = state[1];

  const imageSrc = `https://unavatar.io/github/${userName}`;
  console.log(isFollowing);

  const buttonText = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt={`Avatar de ${children}`}
        />

        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {buttonText}
        </button>
      </aside>
    </article>
  );
}
