// Fond statique : un seul gradient radial CSS, aucune animation JS ni keyframe.
// Beaucoup moins coûteux que les 3 blobs animés précédents.
export default function BackgroundGradient() {
  return <div className="bg-static" aria-hidden="true" />;
}
