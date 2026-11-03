interface ListingRatingProps {
  rating: number;
  reviewCount: number;
}

export const ListingRating = ({ rating, reviewCount }: ListingRatingProps) => (
  <p className="text-sm" aria-label={`Valoración: ${rating} de 5 estrellas; ${reviewCount} reseñas`}>
    <span aria-hidden="true" className="text-amber-600">
      {"★".repeat(Math.round(rating))}{"☆".repeat(5 - Math.round(rating))}
    </span>
    {" "}{rating.toFixed(1)} · {reviewCount} {reviewCount === 1 ? "reseña" : "reseñas"}
  </p>
);
