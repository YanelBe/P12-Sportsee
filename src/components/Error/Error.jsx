//Le composant ErrorPage renvoie le contenu de la page d'erreur, ainsi qu'un lien vers l'accueil
export default function ErrorPage() {
	return (
		<div className="error-page">
			<p className="error-number">404</p>
			<p className="error-text">Cette page n'existe pas !</p>
		</div>
	);
}