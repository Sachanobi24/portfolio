(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
//  FICHIER DE CONFIGURATION DU PORTFOLIO
//  Modifiez ce fichier pour personnaliser tout votre portfolio
// ============================================================
__turbopack_context__.s([
    "config",
    ()=>config
]);
const config = {
    // ----------------------------------------------------------
    // INFORMATIONS PERSONNELLES
    // ----------------------------------------------------------
    identity: {
        prenom: "Mathys",
        nom: "Yssoufi",
        poste: "Administrateur Systèmes & Réseaux",
        statut: "DISPONIBLE — BTS SIO SISR 2024/2026",
        description: "Étudiant en BTS SIO option SISR, passionné par les infrastructures réseau, la cybersécurité et l'administration système Linux/Windows.",
        ville: "France",
        email: "",
        linkedin: "",
        github: "",
        cvUrl: ""
    },
    // ----------------------------------------------------------
    // SECTION À PROPOS
    // ----------------------------------------------------------
    apropos: {
        paragraphes: [
            "Bonjour ! Je suis <strong>Mathys Yssoufi</strong>, étudiant en BTS SIO (Services Informatiques aux Organisations) option SISR (Solutions d'Infrastructure, Systèmes et Réseaux).",
            "Passionné par l'infrastructure informatique, la cybersécurité et l'administration des systèmes, je me spécialise dans la gestion des réseaux, la virtualisation et les services cloud."
        ],
        infos: [
            {
                label: "Formation",
                valeur: "BTS SIO option SISR"
            },
            {
                label: "Spécialité",
                valeur: "Réseaux & Systèmes"
            },
            {
                label: "Disponibilité",
                valeur: "Stage / Alternance"
            }
        ],
        stats: [
            {
                nombre: "2",
                label: "ans BTS"
            },
            {
                nombre: "10+",
                label: "Projets"
            },
            {
                nombre: "SISR",
                label: "Option"
            }
        ]
    },
    // ----------------------------------------------------------
    // COMPÉTENCES TECHNIQUES
    // ----------------------------------------------------------
    competences: [
        {
            categorie: "🌐 Réseaux",
            items: [
                {
                    nom: "Routage / Switching",
                    niveau: 85
                },
                {
                    nom: "TCP/IP / VLAN",
                    niveau: 80
                },
                {
                    nom: "VPN / Firewall",
                    niveau: 75
                },
                {
                    nom: "Cisco / Packet Tracer",
                    niveau: 70
                }
            ]
        },
        {
            categorie: "🖥️ Systèmes",
            items: [
                {
                    nom: "Linux (Ubuntu/Debian)",
                    niveau: 80
                },
                {
                    nom: "Windows Server",
                    niveau: 75
                },
                {
                    nom: "Active Directory",
                    niveau: 70
                },
                {
                    nom: "Virtualisation (VMware)",
                    niveau: 65
                }
            ]
        },
        {
            categorie: "🔐 Sécurité & Scripting",
            items: [
                {
                    nom: "Bash / Shell",
                    niveau: 70
                },
                {
                    nom: "PowerShell",
                    niveau: 65
                },
                {
                    nom: "Cybersécurité",
                    niveau: 60
                },
                {
                    nom: "Python (admin sys)",
                    niveau: 55
                }
            ]
        }
    ],
    // ----------------------------------------------------------
    // PROJET PROFESSIONNEL
    // ----------------------------------------------------------
    projetPro: {
        vision: "Après mon BTS SIO option SISR, je souhaite évoluer dans le domaine de l'administration des systèmes et réseaux, avec une spécialisation en cybersécurité.",
        objectifsCourt: [
            "Décrocher un stage / une alternance dans une DSI ou SSII",
            "Obtenir une certification réseau (Cisco CCNA ou CompTIA Network+)",
            "Approfondir mes compétences en virtualisation (VMware, Proxmox)"
        ],
        objectifsLong: [
            "Évoluer vers un poste d'Ingénieur Systèmes & Réseaux",
            "Me spécialiser en cybersécurité (SOC Analyst, Pen Tester)",
            "Obtenir des certifications avancées (CCNP, CEH, OSCP)",
            "Contribuer à la sécurisation des infrastructures d'entreprises"
        ],
        secteurs: [
            {
                emoji: "🏢",
                nom: "ESN / SSII",
                desc: "Projets variés, montée en compétences rapide"
            },
            {
                emoji: "🏥",
                nom: "Secteur hospitalier",
                desc: "Criticité des SI, sécurité des données médicales"
            },
            {
                emoji: "🏛️",
                nom: "Secteur public",
                desc: "Service aux citoyens, projets d'envergure"
            },
            {
                emoji: "🔐",
                nom: "Cybersécurité",
                desc: "Audit, pentest, protection des infrastructures"
            }
        ],
        poursuiteEtudes: "Bachelor / Licence pro Réseaux & Télécoms ou Cybersécurité envisagés après le BTS."
    },
    // ----------------------------------------------------------
    // EXPÉRIENCES PROFESSIONNELLES
    // ----------------------------------------------------------
    experiences: [
        {
            date: "2025 — En cours",
            titre: "Technicien Réseaux & Systèmes",
            entreprise: "Stage / Entreprise — Ville",
            description: "Administration des serveurs Windows et Linux, configuration réseau, support utilisateurs, mise en place de VPN.",
            tags: [
                "Linux",
                "Windows Server",
                "VPN"
            ]
        },
        {
            date: "2024",
            titre: "Stage Administrateur Réseau",
            entreprise: "Entreprise — Ville",
            description: "Configuration de switches Cisco, mise en place de VLANs, supervision du réseau avec Nagios, documentation technique.",
            tags: [
                "Cisco",
                "VLAN",
                "Nagios"
            ]
        }
    ],
    competencesAcquises: [
        {
            tag: "Réseau",
            titre: "Infrastructure réseau",
            desc: "Configuration routeurs, switches, mise en place VLAN, gestion DHCP/DNS."
        },
        {
            tag: "Système",
            titre: "Administration serveurs",
            desc: "Déploiement et maintenance de serveurs Linux/Windows, virtualisation."
        },
        {
            tag: "Sécurité",
            titre: "Cybersécurité",
            desc: "Pare-feu, VPN, audit de sécurité, sensibilisation des utilisateurs."
        },
        {
            tag: "Support",
            titre: "Helpdesk & Support",
            desc: "Support niveau 1 et 2, ticketing, documentation des procédures."
        }
    ],
    // ----------------------------------------------------------
    // FORMATION
    // ----------------------------------------------------------
    formations: [
        {
            date: "2024 — 2026",
            titre: "BTS SIO option SISR",
            etablissement: "Services Informatiques aux Organisations\nSolutions d'Infrastructure, Systèmes et Réseaux",
            description: "Formation en 2 ans axée sur l'administration des réseaux, la virtualisation, la cybersécurité et la gestion des systèmes d'exploitation.",
            tags: [
                "Réseaux",
                "Linux",
                "Windows Server",
                "Virtualisation",
                "Cybersécurité"
            ]
        },
        {
            date: "2021 — 2024",
            titre: "Baccalauréat",
            etablissement: "Lycée — Ville",
            description: "Obtention du Baccalauréat. Intérêt marqué pour les matières scientifiques et l'informatique.",
            tags: []
        }
    ],
    matieresBTS: [
        "Administration des réseaux",
        "Cybersécurité",
        "Virtualisation",
        "Scripting Bash / PowerShell",
        "Windows Server / AD",
        "Services réseau (DNS, DHCP, NTP)",
        "Supervision réseau",
        "Support et assistance"
    ],
    // ----------------------------------------------------------
    // CERTIFICATIONS
    // ----------------------------------------------------------
    certifications: [
        {
            emoji: "🌐",
            nom: "Cisco CCNA (en cours)",
            organisme: "Cisco Networking Academy",
            date: "2025-2026",
            url: ""
        },
        {
            emoji: "🔐",
            nom: "CompTIA Security+",
            organisme: "CompTIA",
            date: "À venir",
            url: ""
        },
        {
            emoji: "🐧",
            nom: "Linux Essentials",
            organisme: "LPI",
            date: "2024",
            url: ""
        },
        {
            emoji: "☁️",
            nom: "Microsoft AZ-900",
            organisme: "Microsoft",
            date: "À venir",
            url: ""
        }
    ],
    // ----------------------------------------------------------
    // PROJETS RÉALISÉS
    // ----------------------------------------------------------
    projets: [
        {
            emoji: "🌐",
            titre: "Infrastructure VLAN",
            type: "Infrastructure réseau",
            description: "Conception et déploiement d'une infrastructure réseau avec VLANs, routage inter-VLAN sur routeur Cisco.",
            tags: [
                "Cisco",
                "VLAN",
                "Routage"
            ],
            url: ""
        },
        {
            emoji: "🖥️",
            titre: "Serveur Linux",
            type: "Administration système",
            description: "Installation et configuration d'un serveur Debian : Apache, Nginx, PHP, MySQL, SSH, certificats SSL.",
            tags: [
                "Linux",
                "Apache",
                "SSH"
            ],
            url: ""
        },
        {
            emoji: "🔐",
            titre: "Audit sécurité",
            type: "Cybersécurité",
            description: "Réalisation d'un audit de sécurité complet : scan de vulnérabilités, rapport et recommandations.",
            tags: [
                "Nmap",
                "Nessus",
                "OWASP"
            ],
            url: ""
        },
        {
            emoji: "☁️",
            titre: "Infrastructure cloud",
            type: "Cloud & Virtualisation",
            description: "Déploiement d'une infrastructure virtualisée sous Proxmox avec haute disponibilité.",
            tags: [
                "Proxmox",
                "VMware",
                "Cloud"
            ],
            url: ""
        }
    ],
    // ----------------------------------------------------------
    // VEILLE TECHNOLOGIQUE
    // ----------------------------------------------------------
    veille: [
        {
            categorie: "Cybersécurité",
            titre: "Zero Trust Architecture",
            contenu: "Le modèle Zero Trust révolutionne la sécurité réseau en ne faisant confiance à aucun utilisateur par défaut, même interne.",
            date: "2025"
        },
        {
            categorie: "Cloud",
            titre: "Edge Computing",
            contenu: "L'edge computing rapproche le traitement des données de leur source, réduisant la latence pour les applications critiques.",
            date: "2025"
        },
        {
            categorie: "Réseau",
            titre: "Wi-Fi 7 (802.11be)",
            contenu: "Le Wi-Fi 7 offre des débits multi-gigabits et une latence ultra-faible grâce au Multi-Link Operation (MLO).",
            date: "2024"
        },
        {
            categorie: "Système",
            titre: "Conteneurisation",
            contenu: "Docker et Kubernetes s'imposent comme standards pour le déploiement d'applications en production.",
            date: "2024"
        },
        {
            categorie: "Sécurité",
            titre: "IA et cyberdéfense",
            contenu: "L'intelligence artificielle est intégrée dans les SIEM pour détecter les menaces en temps réel.",
            date: "2025"
        },
        {
            categorie: "Protocoles",
            titre: "IPv6 adoption",
            contenu: "L'adoption d'IPv6 s'accélère avec l'épuisement des adresses IPv4 et les nouvelles exigences réglementaires.",
            date: "2024"
        }
    ],
    // ----------------------------------------------------------
    // CENTRES D'INTÉRÊT
    // ----------------------------------------------------------
    interets: [
        {
            emoji: "💻",
            nom: "Programmation",
            desc: "Développement de scripts et outils d'automatisation"
        },
        {
            emoji: "🔐",
            nom: "CTF / Hacking éthique",
            desc: "Participation à des challenges de cybersécurité"
        },
        {
            emoji: "🎮",
            nom: "Gaming",
            desc: "Esport et jeux stratégiques"
        },
        {
            emoji: "📡",
            nom: "Radio amateur",
            desc: "Passion pour les communications radio et les protocoles"
        },
        {
            emoji: "🎵",
            nom: "Musique",
            desc: "Écoute et pratique musicale"
        },
        {
            emoji: "🌍",
            nom: "Voyages",
            desc: "Découverte de cultures et technologies différentes"
        },
        {
            emoji: "📚",
            nom: "Lecture tech",
            desc: "Livres et articles sur l'informatique et la cybersécurité"
        },
        {
            emoji: "🏃",
            nom: "Sport",
            desc: "Running et activités outdoor"
        }
    ],
    engagement: "Participation à des associations tech locales, aide à la sensibilisation à la cybersécurité, contribution à des projets open source.",
    // ----------------------------------------------------------
    // NAVIGATION
    // ----------------------------------------------------------
    nav: [
        {
            label: "Accueil",
            href: "/"
        },
        {
            label: "Projet pro",
            href: "/projet-pro"
        },
        {
            label: "Expériences",
            href: "/experiences"
        },
        {
            label: "Formation",
            href: "/formation"
        },
        {
            label: "Certifications",
            href: "/certifications"
        },
        {
            label: "Projets",
            href: "/projets"
        },
        {
            label: "Veille",
            href: "/veille"
        },
        {
            label: "Intérêts",
            href: "/interets"
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Header() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 50)
            }["Header.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const { prenom, nom } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].identity;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header${scrolled ? ' scrolled' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "site-logo",
                        children: [
                            prenom.charAt(0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 31
                            }, this),
                            nom.charAt(0),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--text-dim)'
                                },
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 61
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 113
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: `main-nav${menuOpen ? ' open' : ''}`,
                        id: "main-nav",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: pathname === item.href ? 'active' : '',
                                onClick: ()=>setMenuOpen(false),
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-toggle",
                        onClick: ()=>setMenuOpen((o)=>!o),
                        "aria-label": menuOpen ? 'Fermer le menu' : 'Ouvrir le menu',
                        "aria-expanded": menuOpen,
                        children: menuOpen ? '✕' : '☰'
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Header, "O3Og3Vm96FL0UQKVEPKx47Olcq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0.urq.d._.js.map