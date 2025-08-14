import { Metadata } from 'next';
import LegalHeader from '@/components/layout/LegalHeader';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales | De Pascalis Groupe',
  description:
    'Mentions légales de De Pascalis Groupe - Entreprise de rénovation bâtiment et immobilier à Belfort.',
};

export default function MentionsLegales() {
  return (
    <>
      <LegalHeader />
      <main className="min-h-screen bg-black pb-16 pt-24">
        <div className="container-custom">
          <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Mentions <span className="text-gold">Légales</span>
          </h1>

          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                1. Identité de l'éditeur
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Raison sociale : SAS DE PASCALIS</li>
                <li>Forme juridique : SAS (Société par Actions Simplifiée)</li>
                <li>Siège social : 34 Rue de Valdoie, 90000 Belfort, France</li>
                <li>Numéro SIREN : 921 570 040</li>
                <li>Numéro SIRET : 921 570 040 00011</li>
                <li>Numéro RCS : 921 570 040 R.C.S. Belfort</li>
                <li>Numéro de TVA : FR30921570040</li>
                <li>Capital social : 500,00 €</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                2. Dirigeant
              </h2>
              <p>Président : May Florian</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                3. Contact
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Email : [email réservé aux utilisateurs connectés]</li>
                <li>Téléphone : [numéro réservé aux utilisateurs connectés]</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                4. Activités de l'entreprise
              </h2>
              <p className="mb-2">SAS DE PASCALIS se spécialise dans :</p>
              <p>
                Ingénierie et études techniques : Activité de maîtrise d'œuvre,
                gestion de projet, et formation dans ces domaines. La société
                est également active dans le domaine du marchand de biens.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                5. Hébergeur du site
              </h2>
              <p>Le site est hébergé par :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Nom de l'hébergeur : Netlify</li>
                <li>
                  Adresse du siège : 2325 3rd Street, Suite 344, San Francisco,
                  CA 94107, USA
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                6. Propriété intellectuelle
              </h2>
              <p>
                Tous les éléments présents sur ce site, y compris les textes,
                images, logos, vidéos, graphiques et autres contenus sont la
                propriété exclusive de SAS DE PASCALIS ou de ses partenaires,
                sauf mention contraire. Toute reproduction ou représentation de
                ces éléments, en tout ou partie, sur quelque support que ce
                soit, sans autorisation préalable et écrite, est strictement
                interdite et constitue une violation des droits d'auteur.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                7. Responsabilité
              </h2>
              <p>
                SAS DE PASCALIS ne pourra être tenue responsable des dommages
                directs ou indirects résultant de l'utilisation du site ou de
                l'impossibilité d'y accéder. Nous nous réservons également le
                droit de modifier, suspendre ou supprimer tout ou partie de ce
                site à tout moment et sans préavis.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                8. Loi applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par la loi française.
                Tout litige relatif à l'utilisation du site sera soumis aux
                tribunaux compétents de Belfort.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
