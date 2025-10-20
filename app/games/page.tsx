export default function GamesPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        games
      </h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        vibe games coded purely for the vibes
      </p>
      <ul className="space-y-3">
        <li>
          <a
            href="/games/hello-kitty-shooter/index.html"
            className="hover:underline"
          >
            Hello Kitty Asteroid Shooter
          </a>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 ml-5">
            Two-player arcade shooter with powerups, lives system, and an epic boss battle
          </p>
        </li>
      </ul>
    </section>
  );
}
