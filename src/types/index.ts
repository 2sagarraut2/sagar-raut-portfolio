export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  metrics: string[];
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Skill {
  title: string;
  icon: string;
  skills: string[];
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface ThemeProps {
  isDark: boolean;
}
```

## **16. .gitignore**
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts