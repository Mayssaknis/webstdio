# WebStudio — Site vitrine de l'agence

Site vitrine professionnel et responsive pour **WebStudio**, agence tunisienne
de création de sites web modernes (vitrines, e-commerce, applications web).

## Technologies

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Motion** (Framer Motion) pour les animations
- **Lucide React** pour les icônes
- **Zod** pour la validation (client + serveur)
- **Prisma + PostgreSQL** pour le stockage des demandes de devis
- **Resend** pour la notification e-mail des demandes

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrez http://localhost:3000.

## Configuration (variables d'environnement)

Copiez `.env.example` vers `.env` puis renseignez les valeurs.

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (SEO, contrôle d'origine) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail affiché sur le site |
| `NEXT_PUBLIC_CONTACT_PHONE` | Téléphone affiché sur le site |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Numéro WhatsApp au format international, sans `+` (ex. `21620123456`). Le bouton WhatsApp ne s'affiche que si cette valeur est renseignée. |
| `NEXT_PUBLIC_CONTACT_ADDRESS` | Adresse / ville affichée |
| `NEXT_PUBLIC_SOCIAL_*` | Réseaux sociaux (facultatif) |
| `DATABASE_URL` | Connexion PostgreSQL (Prisma) |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi des e-mails |
| `QUOTE_EMAIL_TO` | Adresse qui reçoit les demandes de devis |
| `QUOTE_EMAIL_FROM` | Adresse d'expédition (doit être validée dans Resend) |
| `PRIVACY_PEPPER` | Grain de sel pour hacher les adresses IP |
| `ALLOWED_ORIGINS` | Origines supplémentaires autorisées par l'API (optionnel) |

### Formulaire de devis

Le formulaire `/contact` valide les champs (nom, e-mail, téléphone, type de
projet, description, consentement), inclut un honeypot anti-spam, un
anti-doublon par IP et révalide toutes les données côté serveur.

La soumission est **réellement enregistrée** de deux manières :

1. en **base de données** (si `DATABASE_URL` est définie et les migrations
   appliquées) ;
2. par **e-mail** via Resend (si `RESEND_API_KEY` et `QUOTE_EMAIL_TO` sont
   définies).

> ⚠️ Sans configuration de la base et/ou de l'e-mail, le formulaire retourne
> une erreur explicite plutôt qu'un faux succès, par choix délibéré.

### Base de données (Prisma)

```bash
npx prisma migrate dev --name init    # applique le schéma localement
npx prisma generate                   # régénère le client (automatique via postinstall)
```

Le client généré est ignoré par git : `npm install` / `npm run build` le
régénèrent automatiquement.

## Structure

```
src/
  app/                    # Pages (/, /services, /projets, /tarifs, /a-propos, /contact)
    api/devis/route.ts    # Endpoint de réception des demandes de devis
    sitemap.ts, robots.ts # Référencement
  components/             # Navbar, footer, boutons, cartes, formulaire
    sections/             # Sections de la page d'accueil
  content/                # Contenu (services, projets, tarifs)
  lib/                    # Config, validation, Prisma, e-mail, utilitaires
prisma/                   # Schéma de base de données
```

## Déploiement (Vercel)

1. Poussez le projet vers GitHub.
2. Importez le dépôt sur [Vercel](https://vercel.com).
3. Ajoutez les variables d'environnement (cf. tableau ci-dessus).
4. Créez une base PostgreSQL (Vercel Postgres / Neon) et renseignez
   `DATABASE_URL`.
5. Au premier déploiement, exécutez `npx prisma migrate deploy` pour créer les
   tables (la build régénère automatiquement le client Prisma).
6. Connectez votre nom de domaine dans le tableau de bord Vercel.

## Notes d'accessibilité

- Menu clavier complet, lien « Aller au contenu », `focus-visible` visible.
- Animations désactivées avec `prefers-reduced-motion`.
- Formulaires étiquetés, contrastes vérifiés, `aria` sur les états.