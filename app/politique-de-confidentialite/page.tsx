import { Metadata } from 'next';
import LegalHeader from '@/components/layout/LegalHeader';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | De Pascalis Groupe',
  description:
    'Politique de confidentialité de De Pascalis Groupe - Protection de vos données personnelles.',
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <LegalHeader />
      <main className="min-h-screen bg-black pb-16 pt-24">
        <div className="container-custom">
          <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Politique de <span className="text-gold">Confidentialité</span>
          </h1>

          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                1. Introduction
              </h2>
              <p>
                La protection de vos données personnelles est essentielle pour
                SAS DE PASCALIS. Nous nous engageons à respecter les
                réglementations en vigueur, y compris le Règlement Général sur
                la Protection des Données (RGPD), et cette politique de
                confidentialité décrit la collecte, l'utilisation et la
                protection de vos informations personnelles.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                2. Données collectées
              </h2>
              <p className="mb-4">
                Les données personnelles que nous collectons sur notre site
                incluent :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Nom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
              </ul>
              <p className="mt-4">
                Ces informations sont collectées lorsque vous utilisez nos
                services, remplissez des formulaires de contact, ou interagissez
                avec nous par d'autres moyens.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                3. Finalité de la collecte des données personnelles
              </h2>
              <p>Les données collectées sont utilisées pour :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Gérer les demandes de renseignements et les contacts
                  commerciaux.
                </li>
                <li>
                  Fournir nos services de manière efficace et personnalisée.
                </li>
                <li>
                  Assurer une communication avec nos clients pour la gestion des
                  projets et des devis.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                4. Partage des données personnelles
              </h2>
              <p>
                Les données personnelles collectées peuvent être partagées avec
                une agence de croissance pour mieux traiter les demandes et
                améliorer nos services. Les données ne sont en aucun cas
                revendues ou réutilisées pour d'autres fins commerciales. Elles
                sont uniquement utilisées pour des fins internes liées à
                l'exploitation commerciale.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                5. Durée de conservation des données personnelles
              </h2>
              <p>
                Les données sont conservées uniquement pendant la durée
                nécessaire à l'exploitation commerciale. Elles sont supprimées
                sur demande de l'utilisateur. En l'absence de demande
                spécifique, elles seront conservées conformément aux obligations
                légales ou contractuelles.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                6. Sécurité des données personnelles
              </h2>
              <p>
                Nous mettons en œuvre des mesures techniques et
                organisationnelles pour garantir la sécurité de vos données
                personnelles et éviter leur perte, leur utilisation abusive ou
                leur accès non autorisé. Toutes les données sont émises sur des
                logiciels privés et sécurisés.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                7. Transfert des données personnelles
              </h2>
              <p>
                Les données personnelles collectées ne sont pas transférées en
                dehors de l'Union Européenne.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                8. Vos droits concernant vos données personnelles
              </h2>
              <p className="mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Droit d'accès : Vous avez le droit d'obtenir une copie des
                  données personnelles que nous détenons à votre sujet.
                </li>
                <li>
                  Droit de rectification : Vous pouvez demander la correction de
                  toute donnée inexacte ou incomplète.
                </li>
                <li>
                  Droit à l'effacement : Vous pouvez demander la suppression de
                  vos données personnelles à tout moment.
                </li>
                <li>
                  Droit à la limitation du traitement : Vous pouvez demander que
                  l'utilisation de vos données soit limitée.
                </li>
                <li>
                  Droit d'opposition : Vous avez le droit de vous opposer à tout
                  moment au traitement de vos données.
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, veuillez nous contacter à [email
                réservé aux utilisateurs connectés].
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
