// Declare quiz DB

const quizHtmlBasics = {
    title: "HTML Débutant",
    level: "novice",
    questions: [
    {
        statement: "Que signifie HTML ?",
        answers: ["High Transmission Mail List", "HighTide Mixed Literacy", "HyperText Markup Language", "Hello To My Lawyer"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        statement: "Citez un attribut HTML lié aux images obligatoire",
        answers: ["class", "href", "src", "img"],
        correctAnswer: "src"
    },
    {
        statement: "Quelle est la balise racine d'un document HTML ?",
        answers: ["&lt;body&gt;", "&lt;head&gt;", "&lt;html&gt;", "&lt;!DOCTYPE&gt;"],
        correctAnswer: "&lt;html&gt;"
    },
    {
        statement: "Quel élément crée un saut de ligne ?",
        answers: ["&lt;lb&gt;", "&lt;break&gt;", "&lt;br&gt;", "&lt;newline&gt;"],
        correctAnswer: "&lt;br&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour une liste non ordonnée ?",
        answers: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        correctAnswer: "&lt;ul&gt;"
    },
    {
        statement: "Quel attribut est obligatoire pour les balises &lt;img&gt; ?",
        answers: ["title", "src", "link", "name"],
        correctAnswer: "src"
    },
    {
        statement: "Quelle balise contient le contenu principal visible d'une page ?",
        answers: ["&lt;main&gt;", "&lt;head&gt;", "&lt;body&gt;", "&lt;content&gt;"],
        correctAnswer: "&lt;body&gt;"
    },
    {
        statement: "Comment créer un lien vers une autre page ?",
        answers: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        correctAnswer: "&lt;a&gt;"
    },
    {
        statement: "Quelle syntaxe est correcte pour un commentaire HTML ?",
        answers: ["// Commentaire", "&lt;!-- Commentaire --&gt;", "/* Commentaire */", "** Commentaire **"],
        correctAnswer: "&lt;!-- Commentaire --&gt;"
    },
    {
        statement: "Quel élément HTML5 spécifie un contenu autonome ?",
        answers: ["&lt;div&gt;", "&lt;article&gt;", "&lt;section&gt;", "&lt;content&gt;"],
        correctAnswer: "&lt;article&gt;"
    },
    {
        statement: "Quel élément est utilisé pour un formulaire ?",
        answers: ["&lt;form&gt;", "&lt;input&gt;", "&lt;submit&gt;", "&lt;action&gt;"],
        correctAnswer: "&lt;form&gt;"
    },
    {
        statement: "Quel attribut permet de définir le type d'un champ de formulaire ?",
        answers: ["type", "name", "value", "id"],
        correctAnswer: "type"
    },
    {
        statement: "Quelle balise crée un en-tête de niveau 1 ?",
        answers: ["&lt;h&gt;", "&lt;header&gt;", "&lt;h1&gt;", "&lt;head1&gt;"],
        correctAnswer: "&lt;h1&gt;"
    },
    {
        statement: "Quel élément représente une ligne de tableau ?",
        answers: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;row&gt;"],
        correctAnswer: "&lt;tr&gt;"
    },
    {
        statement: "Quelle balise insère une ligne horizontale ?",
        answers: ["&lt;line&gt;", "&lt;hr&gt;", "&lt;hl&gt;", "&lt;divider&gt;"],
        correctAnswer: "&lt;hr&gt;"
    },
    {
        statement: "Parmi ces éléments, lequel est de type block par défaut ?",
        answers: ["&lt;span&gt;", "&lt;div&gt;", "&lt;a&gt;", "&lt;em&gt;"],
        correctAnswer: "&lt;div&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour du code informatique ?",
        answers: ["&lt;code&gt;", "&lt;pre&gt;", "&lt;console&gt;", "&lt;script&gt;"],
        correctAnswer: "&lt;code&gt;"
    },
    {
        statement: "Quel attribut lie un label à un input ?",
        answers: ["id", "class", "for", "name"],
        correctAnswer: "for"
    },
    {
        statement: "Quel attribut permet d'ouvrir un lien dans un nouvel onglet ?",
        answers: ["target='_self'", "target='_blank'", "target='_new'", "target='_window'"],
        correctAnswer: "target='_blank'"
    },
    {
        statement: "Quelle balise charge un fichier CSS ?",
        answers: ["&lt;style&gt;", "&lt;css&gt;", "&lt;link&gt;", "&lt;script&gt;"],
        correctAnswer: "&lt;link&gt;"
    },
    {
        statement: "Quel élément crée un menu déroulant ?",
        answers: ["&lt;input&gt;", "&lt;select&gt;", "&lt;option&gt;", "&lt;dropdown&gt;"],
        correctAnswer: "&lt;select&gt;"
    },
    {
        statement: "Quelle est la balise d'une citation courte en ligne ?",
        answers: ["&lt;quote&gt;", "&lt;blockquote&gt;", "&lt;cite&gt;", "&lt;q&gt;"],
        correctAnswer: "&lt;q&gt;"
    },
    {
        statement: "Quel élément HTML5 est utilisé pour une navigation ?",
        answers: ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;ul&gt;", "&lt;navigate&gt;"],
        correctAnswer: "&lt;nav&gt;"
    },
    {
        statement: "Quel élément est auto-fermant ?",
        answers: ["&lt;br&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;p&gt;"],
        correctAnswer: "&lt;br&gt;"
    },
    {
        statement: "Quel attribut rend un champ obligatoire ?",
        answers: ["required", "mandatory", "validate", "necessary"],
        correctAnswer: "required"
    },
    {
        statement: "Quelle balise représente un pied de page ?",
        answers: ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;foot&gt;", "&lt;end&gt;"],
        correctAnswer: "&lt;footer&gt;"
    },
    {
        statement: "Quel élément stocke des métadonnées ?",
        answers: ["&lt;meta&gt;", "&lt;head&gt;", "&lt;data&gt;", "&lt;info&gt;"],
        correctAnswer: "&lt;meta&gt;"
    },
    {
        statement: "Quelle balise crée une liste de définition ?",
        answers: ["&lt;dl&gt;", "&lt;def&gt;", "&lt;dt&gt;", "&lt;list&gt;"],
        correctAnswer: "&lt;dl&gt;"
    },
    {
        statement: "Quel élément affiche une image vectorielle ?",
        answers: ["&lt;img&gt;", "&lt;svg&gt;", "&lt;icon&gt;", "&lt;vector&gt;"],
        correctAnswer: "&lt;svg&gt;"
    },
    {
        statement: "Quel attribut image fournit un texte alternatif ?",
        answers: ["title", "alt", "description", "text"],
        correctAnswer: "alt"
    },
    {
        statement: "Quelle balise permet d'insérer une vidéo dans une page HTML ?",
        answers: ["&lt;video&gt;", "&lt;media&gt;", "&lt;mp4&gt;", "&lt;vid&gt;"],
        correctAnswer: "&lt;video&gt;"
    },
    {
        statement: "Quel attribut permet de spécifier une URL de redirection dans la balise &lt;a&gt; ?",
        answers: ["src", "href", "link", "redirect"],
        correctAnswer: "href"
    },
    {
        statement: "Quelle balise permet d'insérer un fichier audio dans une page HTML ?",
        answers: ["&lt;audio&gt;", "&lt;sound&gt;", "&lt;music&gt;", "&lt;mp3&gt;"],
        correctAnswer: "&lt;audio&gt;"
    },
    {
        statement: "Quel attribut de la balise &lt;input&gt; permet de masquer le texte saisi ?",
        answers: ["hidden", "password", "mask", "type"],
        correctAnswer: "type"
    },
    {
        statement: "Quelle balise permet d'incorporer une autre page HTML dans une page ?",
        answers: ["&lt;embed&gt;", "&lt;iframe&gt;", "&lt;include&gt;", "&lt;import&gt;"],
        correctAnswer: "&lt;iframe&gt;"
    },
    {
        statement: "Quelle balise HTML permet d'organiser une collection d'éléments dans une liste ordonnée ?",
        answers: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;ol&gt;", "&lt;list&gt;"],
        correctAnswer: "&lt;ol&gt;"
    },
    {
        statement: "Quelle balise HTML est utilisée pour marquer une citation longue ?",
        answers: ["&lt;q&gt;", "&lt;cite&gt;", "&lt;blockquote&gt;", "&lt;quote&gt;"],
        correctAnswer: "&lt;blockquote&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour définir un texte en exposant ?",
        answers: ["&lt;sup&gt;", "&lt;sub&gt;", "&lt;exposant&gt;", "&lt;raise&gt;"],
        correctAnswer: "&lt;sup&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour un texte important ?",
        answers: ["&lt;strong&gt;", "&lt;em&gt;", "&lt;bold&gt;", "&lt;mark&gt;"],
        correctAnswer: "&lt;strong&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour un champ de texte dans un formulaire ?",
        answers: ["&lt;input&gt;", "&lt;textarea&gt;", "&lt;text&gt;", "&lt;field&gt;"],
        correctAnswer: "&lt;textarea&gt;"
    },
    {
        statement: "Quelle balise permet de regrouper plusieurs options dans une liste déroulante ?",
        answers: ["&lt;select&gt;", "&lt;optgroup&gt;", "&lt;group&gt;", "&lt;dropdown&gt;"],
        correctAnswer: "&lt;optgroup&gt;"
    },
    {
        statement: "Quel attribut permet de définir un texte à afficher au survol d'un élément ?",
        answers: ["alt", "title", "hover", "tooltip"],
        correctAnswer: "title"
    },
    {
        statement: "Quelle balise permet de diviser une page en sections logiques ?",
        answers: ["&lt;section&gt;", "&lt;div&gt;", "&lt;part&gt;", "&lt;area&gt;"],
        correctAnswer: "&lt;section&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour un bouton dans un formulaire ?",
        answers: ["&lt;button&gt;", "&lt;input&gt;", "&lt;submit&gt;", "&lt;click&gt;"],
        correctAnswer: "&lt;button&gt;"
    },
    {
        statement: "Quel attribut de la balise &lt;img&gt; permet de définir une image de secours si le fichier ne se charge pas ?",
        answers: ["fallback", "alt", "src", "title"],
        correctAnswer: "alt"
    },
    {
        statement: "Quelle balise HTML permet de surligner du texte ?",
        answers: ["&lt;strong&gt;", "&lt;b&gt;", "&lt;em&gt;", "&lt;mark&gt;"],
        correctAnswer: "&lt;mark&gt;"
    },
    {
        statement: "Quelle balise permet d'inclure une icône de type favicon dans une page HTML ?",
        answers: ["&lt;link&gt;", "&lt;icon&gt;", "&lt;meta&gt;", "&lt;favicon&gt;"],
        correctAnswer: "&lt;link&gt;"
    },
    {
        statement: "Quelle balise permet d'organiser le contenu sous forme de tableau ?",
        answers: ["&lt;div&gt;", "&lt;table&gt;", "&lt;grid&gt;", "&lt;row&gt;"],
        correctAnswer: "&lt;table&gt;"
    },
    {
        statement: "Quelle balise est utilisée pour définir un élément de légende dans un tableau ?",
        answers: ["&lt;caption&gt;", "&lt;legend&gt;", "&lt;title&gt;", "&lt;desc&gt;"],
        correctAnswer: "&lt;caption&gt;"
    },
    {
        statement: "Quel attribut permet de faire défiler automatiquement une vidéo ou un fichier audio ?",
        answers: ["loop", "repeat", "autoplay", "scroll"],
        correctAnswer: "loop"
    }    
]
};

const quizHtmlIntermediate = {
    title: "HTML Intermédiaire",
    level: "intermediate",
    questions: [
        {
            statement: "Quel élément HTML5 est utilisé pour une barre de progression ?",
            answers: ["&lt;progress&gt;", "&lt;meter&gt;", "&lt;load&gt;", "&lt;status&gt;"],
            correctAnswer: "&lt;progress&gt;"
        },
        {
            statement: "Quelle API permet le stockage côté client ?",
            answers: ["Cookies", "LocalStorage", "SessionStorage", "Cache"],
            correctAnswer: "LocalStorage"
        },
        {
            statement: "Quel attribut rend le contenu éditable ?",
            answers: ["editable", "contenteditable", "edit", "modifiable"],
            correctAnswer: "contenteditable"
        },
        {
            statement: "Quel élément permet des graphiques via JavaScript ?",
            answers: ["&lt;svg&gt;", "&lt;canvas&gt;", "&lt;graph&gt;", "&lt;draw&gt;"],
            correctAnswer: "&lt;canvas&gt;"
        },
        {
            statement: "Quelle balise optimise les images responsives ?",
            answers: ["&lt;picture&gt;", "&lt;responsive&gt;", "&lt;srcset&gt;", "&lt;media&gt;"],
            correctAnswer: "&lt;picture&gt;"
        },
        {
            statement: "Quel attribut contrôle le comportement de préchargement vidéo ?",
            answers: ["preload", "autoplay", "buffer", "load"],
            correctAnswer: "preload"
        },
        {
            statement: "Quelle méthode géolocalise l'utilisateur ?",
            answers: ["getPosition()", "navigator.geolocation", "window.location", "geoFind()"],
            correctAnswer: "navigator.geolocation"
        },
        {
            statement: "Quel élément crée un tooltip via CSS/HTML ?",
            answers: ["title", "tooltip", "hover", "data-tip"],
            correctAnswer: "title"
        },
        {
            statement: "Quelle balise encapsule du contenu téléchargeable ?",
            answers: ["&lt;a download&gt;", "&lt;save&gt;", "&lt;download&gt;", "&lt;link download&gt;"],
            correctAnswer: "&lt;a download&gt;"
        },
        {
            statement: "Quel attribut améliore l'accessibilité des images ?",
            answers: ["longdesc", "aria-label", "access", "description"],
            correctAnswer: "aria-label"
        },
        {
            statement: "Quelle balise définit des options pour &lt;datalist&gt; ?",
            answers: ["&lt;option&gt;", "&lt;item&gt;", "&lt;datalist&gt;", "&lt;select&gt;"],
            correctAnswer: "&lt;option&gt;"
        },
        {
            statement: "Quelle API permet le drag & drop ?",
            answers: ["DragAPI", "EventListeners", "HTML5 DnD", "MouseEvents"],
            correctAnswer: "HTML5 DnD"
        },
        {
            statement: "Quel attribut contrôle la mise en cache manifest ?",
            answers: ["manifest", "cache", "appcache", "offline"],
            correctAnswer: "manifest"
        },
        {
            statement: "Quel élément affiche un indicateur de tâche en cours ?",
            answers: ["&lt;spinner&gt;", "&lt;progress&gt;", "&lt;loading&gt;", "&lt;busy&gt;"],
            correctAnswer: "&lt;progress&gt;"
        },
        {
            statement: "Quelle balise est utilisée pour les templates ?",
            answers: ["&lt;template&gt;", "&lt;script type='text/html'&gt;", "&lt;placeholder&gt;", "&lt;ghost&gt;"],
            correctAnswer: "&lt;template&gt;"
        },
        {
            statement: "Quel attribut iframe empêche l'exécution de scripts ?",
            answers: ["sandbox", "security", "noscript", "safe"],
            correctAnswer: "sandbox"
        },
        {
            statement: "Quelle balise insère une citation longue ?",
            answers: ["&lt;quote&gt;", "&lt;blockquote&gt;", "&lt;longquote&gt;", "&lt;cite&gt;"],
            correctAnswer: "&lt;blockquote&gt;"
        },
        {
            statement: "Quel élément crée une légende pour une figure ?",
            answers: ["&lt;caption&gt;", "&lt;legend&gt;", "&lt;figcaption&gt;", "&lt;description&gt;"],
            correctAnswer: "&lt;figcaption&gt;"
        },
        {
            statement: "Quelle balise définit des métadonnées Open Graph ?",
            answers: ["&lt;og:meta&gt;", "&lt;meta property&gt;", "&lt;og&gt;", "&lt;graph&gt;"],
            correctAnswer: "&lt;meta property&gt;"
        },
        {
            statement: "Quel attribut input valide une regex ?",
            answers: ["validate", "regex", "pattern", "check"],
            correctAnswer: "pattern"
        },
        {
            statement: "Quel élément permet des détails repliables ?",
            answers: ["&lt;collapse&gt;", "&lt;details&gt;", "&lt;toggle&gt;", "&lt;hidden&gt;"],
            correctAnswer: "&lt;details&gt;"
        },
        {
            statement: "Quelle API permet le stockage de session ?",
            answers: ["sessionStorage", "localStorage", "Cookie", "Cache API"],
            correctAnswer: "sessionStorage"
        },
        {
            statement: "Quel attribut contrôle l'ordre de tabulation ?",
            answers: ["tabindex", "focusorder", "taborder", "accesskey"],
            correctAnswer: "tabindex"
        },
        {
            statement: "Quelle balise est utilisée pour des sous-titres vidéo ?",
            answers: ["&lt;subtitle&gt;", "&lt;track&gt;", "&lt;caption&gt;", "&lt;texttrack&gt;"],
            correctAnswer: "&lt;track&gt;"
        },
        {
            statement: "Quel élément représente une abréviation ?",
            answers: ["&lt;abbr&gt;", "&lt;acro&gt;", "&lt;short&gt;", "&lt;abbrev&gt;"],
            correctAnswer: "&lt;abbr&gt;"
        },
        {
            statement: "Quel attribut lie un élément à un CSS Module ?",
            answers: ["class", "id", "module", "is"],
            correctAnswer: "class"
        },
        {
            statement: "Quelle balise est obsolète en HTML5 ?",
            answers: ["&lt;center&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;aside&gt;"],
            correctAnswer: "&lt;center&gt;"
        },
        {
            statement: "Quelle méthode canvas dessine un rectangle ?",
            answers: ["fillRect()", "drawSquare()", "createRectangle()", "makeRect()"],
            correctAnswer: "fillRect()"
        },
        {
            statement: "Quel élément affiche une barre de mesure scalaire ?",
            answers: ["&lt;scale&gt;", "&lt;meter&gt;", "&lt;range&gt;", "&lt;progress&gt;"],
            correctAnswer: "&lt;meter&gt;"
        },
        {
            statement: "Quel attribut active la validation native des formulaires ?",
            answers: ["novalidate", "validate", "autovalidate", "formcheck"],
            correctAnswer: "novalidate"
        },
    {
            statement: "Quel élément HTML est utilisé pour le résumé d'un bloc &lt;details&gt; ?",
            answers: ["&lt;summary&gt;", "&lt;legend&gt;", "&lt;title&gt;", "&lt;caption&gt;"],
            correctAnswer: "&lt;summary&gt;"
        },
        {
            statement: "Quel élément est utilisé pour une légende de figure ?",
            answers: ["&lt;caption&gt;", "&lt;figcaption&gt;", "&lt;legend&gt;", "&lt;description&gt;"],
            correctAnswer: "&lt;figcaption&gt;"
        },
        {
            statement: "Quel attribut améliore le référencement pour les images ?",
            answers: ["title", "alt", "description", "seo-text"],
            correctAnswer: "alt"
        },
        {
            statement: "Quelle balise charge un script en différé ?",
            answers: ["&lt;script async&gt;", "&lt;script defer&gt;", "&lt;script lazy&gt;", "&lt;script delay&gt;"],
            correctAnswer: "&lt;script defer&gt;"
        },
        {
            statement: "Comment définir l'encodage de la page en UTF-8 ?",
            answers: [
                "&lt;meta charset='utf-8'&gt;",
                "&lt;meta encoding='UTF-8'&gt;",
                "&lt;meta http-equiv='charset' content='UTF-8'&gt;",
                "&lt;encode&gt;UTF-8&lt;/encode&gt;"
            ],
            correctAnswer: "&lt;meta charset='utf-8'&gt;"
        },
        {
            statement: "Quelle balise est utilisée pour des détails repliables ?",
            answers: ["&lt;collapse&gt;", "&lt;details&gt;", "&lt;hidden&gt;", "&lt;accordion&gt;"],
            correctAnswer: "&lt;details&gt;"
        },
        {
            statement: "Quel attribut input valide une adresse email ?",
            answers: ["type='mail'", "type='email'", "validate='email'", "pattern='email'"],
            correctAnswer: "type='email'"
        },
        {
            statement: "Quelle balise est obsolète en HTML5 ?",
            answers: ["&lt;center&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;header&gt;"],
            correctAnswer: "&lt;center&gt;"
        },
        {
            statement: "Comment créer un lien qui ouvre un nouvel onglet ?",
            answers: ["target='_blank'", "target='_new'", "newtab", "window='new'"],
            correctAnswer: "target='_blank'"
        },
        {
            statement: "Quelle API permet le glisser-déposer natif ?",
            answers: ["DragEvent", "MouseEvent", "HTML5 DnD", "EventAPI"],
            correctAnswer: "HTML5 DnD"
        },
        {
            statement: "Quelle balise définit une entrée de données pour &lt;datalist&gt; ?",
            answers: ["&lt;option&gt;", "&lt;item&gt;", "&lt;datalist&gt;", "&lt;input list&gt;"],
            correctAnswer: "&lt;option&gt;"
        },
        {
            statement: "Quelle balise est utilisée pour des métadonnées Open Graph ?",
            answers: ["&lt;og:meta&gt;", "&lt;meta property&gt;", "&lt;og&gt;", "&lt;graph&gt;"],
            correctAnswer: "&lt;meta property&gt;"
        },
        {
            statement: "Quel attribut d'iframe permet d'autoriser l'exécution de scripts dans un contexte sécurisé ?",
            answers: ["allow-scripts", "sandbox", "unsafe-scripts", "scriptable"],
            correctAnswer: "allow-scripts"
        },
        {
            statement: "Comment définir une langue pour un élément ?",
            answers: ["lang='fr'", "xml:lang='fr'", "hreflang='fr'", "language='fr'"],
            correctAnswer: "lang='fr'"
        },
        {
            statement: "Quel élément HTML sémantique permet d'indiquer une date ou une heure ?",
            answers: ["&lt;date&gt;", "&lt;time&gt;", "&lt;datetime&gt;", "&lt;calendar&gt;"],
            correctAnswer: "&lt;time&gt;"
        },
        {
            statement: "Quel attribut d'une balise `&lt;input&gt;` permet de désactiver un champ de formulaire ?",
            answers: ["readonly", "disabled", "inactive", "locked"],
            correctAnswer: "disabled"
        },
        {
            statement: "Quelle balise HTML permet d'insérer du code informatique préformaté ?",
            answers: ["&lt;code&gt;", "&lt;pre&gt;", "&lt;format&gt;", "&lt;block&gt;"],
            correctAnswer: "&lt;pre&gt;"
        },
        {
            statement: "Quel attribut d'un `&lt;form&gt;` permet de spécifier où envoyer les données lors de la soumission ?",
            answers: ["action", "target", "method", "submit"],
            correctAnswer: "action"
        },
        {
            statement: "Quelle balise HTML permet d'afficher une sortie générée par un script ?",
            answers: ["&lt;result&gt;", "&lt;output&gt;", "&lt;display&gt;", "&lt;script-output&gt;"],
            correctAnswer: "&lt;output&gt;"
        },
        {
            statement: "Quel attribut contrôle si une vidéo est lue automatiquement après son chargement ?",
            answers: ["autoplay", "play", "auto", "start"],
            correctAnswer: "autoplay"
        }
    ]
};

const quizCssBasics = {
    title: "CSS Débutant",
    level: "novice",
    questions: [
    {
        statement: "Quelle propriété change la couleur du texte ?",
        answers: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: "color"
    },
    {
        statement: "Comment centrer horizontalement un élément bloc ?",
        answers: ["margin: auto", "align: center", "position: middle", "center: true"],
        correctAnswer: "margin: auto"
    },
    {
        statement: "Quelle unité est relative à la taille de la police du parent ?",
        answers: ["px", "em", "vh", "rem"],
        correctAnswer: "em"
    },
    {
        statement: "Quelle pseudo-classe stylise un lien visité ?",
        answers: [":hover", ":active", ":visited", ":focus"],
        correctAnswer: ":visited"
    },
    {
        statement: "Quelle propriété ajoute un espace entre les bordures d'un tableau ?",
        answers: ["border-gap", "table-spacing", "border-spacing", "margin"],
        correctAnswer: "border-spacing"
    },
    {
        statement: "Quelle propriété modifie la taille du texte ?",
        answers: ["text-size", "font-size", "size", "font-style"],
        correctAnswer: "font-size"
    },
    {
        statement: "Comment masquer un élément visuellement ?",
        answers: ["visibility: hidden", "display: none", "opacity: 0", "hidden: true"],
        correctAnswer: "display: none"
    },
    {
        statement: "Quelle propriété contrôle l'épaisseur de la police ?",
        answers: ["font-weight", "text-bold", "font-size", "weight"],
        correctAnswer: "font-weight"
    },
    {
        statement: "Quelle valeur positionne un élément en relatif ?",
        answers: ["static", "relative", "absolute", "fixed"],
        correctAnswer: "relative"
    },
    {
        statement: "Comment appliquer un style à plusieurs sélecteurs ?",
        answers: ["Utiliser &amp;", "Séparer par des virgules", "Utiliser +", "Séparer par des points"],
        correctAnswer: "Séparer par des virgules"
    },
    {
        statement: "Quelle propriété ajoute une ombre à une boîte ?",
        answers: ["box-shadow", "text-shadow", "shadow-effect", "element-shadow"],
        correctAnswer: "box-shadow"
    },
    {
        statement: "Comment styliser la première lettre d'un paragraphe ?",
        answers: [":first-letter", "::first-letter", ":start-letter", "::initial"],
        correctAnswer: "::first-letter"
    },
    {
        statement: "Quelle propriété change le curseur de la souris ?",
        answers: ["mouse", "cursor", "pointer", "hover"],
        correctAnswer: "cursor"
    },
    {
        statement: "Quelle valeur de display masque l'élément ?",
        answers: ["none", "hidden", "invisible", "transparent"],
        correctAnswer: "none"
    },
    {
        statement: "Comment définir une image de fond ?",
        answers: ["background-image", "image-source", "bg-image", "background-src"],
        correctAnswer: "background-image"
    },
    {
        statement: "Quelle propriété contrôle l'espace entre les lignes ?",
        answers: ["line-height", "text-spacing", "spacing", "vertical-space"],
        correctAnswer: "line-height"
    },
    {
        statement: "Quelle propriété arrondit les coins d'un élément ?",
        answers: ["border-radius", "corner-radius", "round-edge", "border-circle"],
        correctAnswer: "border-radius"
    },
    {
        statement: "Comment appliquer un style au survol ?",
        answers: [":click", ":hover", ":over", ":active"],
        correctAnswer: ":hover"
    },
    {
        statement: "Quelle propriété aligne le texte à gauche ?",
        answers: ["text-align: left", "align: start", "text-position: left", "direction: ltr"],
        correctAnswer: "text-align: left"
    },
    {
        statement: "Quelle unité est relative à la taille du viewport ?",
        answers: ["em", "px", "vw", "%"],
        correctAnswer: "vw"
    },
    {
        statement: "Comment souligner un texte ?",
        answers: ["text-decoration: underline", "font-style: underline", "underline: true", "text-line: under"],
        correctAnswer: "text-decoration: underline"
    },
    {
        statement: "Quelle propriété contrôle l'ordre d'empilement ?",
        answers: ["z-index", "stack-order", "layer", "position-index"],
        correctAnswer: "z-index"
    },
    {
        statement: "Quelle valeur de position est par défaut ?",
        answers: ["static", "relative", "absolute", "fixed"],
        correctAnswer: "static"
    },
    {
        statement: "Comment cibler un élément avec la classe 'menu' ?",
        answers: [".menu", "#menu", "class='menu'", "menu"],
        correctAnswer: ".menu"
    },
    {
        statement: "Quelle propriété définit la famille de polices ?",
        answers: ["font-family", "text-font", "font-type", "family"],
        correctAnswer: "font-family"
    },
    {
        statement: "Comment centrer verticalement avec Flexbox ?",
        answers: ["align-items: center", "justify-content: center", "vertical-align: middle", "flex-center: true"],
        correctAnswer: "align-items: center"
    },
    {
        statement: "Quelle propriété gère les marges intérieures ?",
        answers: ["margin", "spacing", "padding", "inner-space"],
        correctAnswer: "padding"
    },
    {
        statement: "Quelle pseudo-classe cible le premier élément enfant ?",
        answers: [":first-child", ":child(1)", ":first", ":nth-child(1)"],
        correctAnswer: ":first-child"
    },
    {
        statement: "Comment inverser l'ordre des éléments en Flexbox ?",
        answers: ["flex-direction: reverse", "flex-order: reverse", "flex-direction: row-reverse", "flex-reverse: true"],
        correctAnswer: "flex-direction: row-reverse"
    },
    {
        statement: "Quelle fontion ajoute un dégradé en arrière-plan ?",
        answers: ["background-gradient()", "gradient()", "linear-gradient()", "color-gradient()"],
        correctAnswer: "linear-gradient()"
    },
    {
        statement: "Quelle propriété contrôle l'espacement des lettres ?",
        answers: ["letter-spacing", "text-spacing", "font-spacing", "word-spacing"],
        correctAnswer: "letter-spacing"
    },
    {
        statement: "Comment cibler tous les éléments &lt;p&gt; dans un conteneur #main ?",
        answers: ["p#main", "#main p", "#main &gt; p", "#main + p"],
        correctAnswer: "#main p"
    },
    {
        statement: "Quelle propriété transforme tout le texte en majuscules ?",
        answers: ["text-transform: uppercase", "font-case: upper", "uppercase: true", "text-style: caps"],
        correctAnswer: "text-transform: uppercase"
    },
    {
        statement: "Quelle valeur de display crée un conteneur flex ?",
        answers: ["block", "flex", "grid", "inline-flex"],
        correctAnswer: "flex"
    },
    {
        statement: "Comment styliser un lien non visité ?",
        answers: [":link", ":unvisited", ":href", ":default"],
        correctAnswer: ":link"
    },
    {
        statement: "Quelle propriété contrôle la couleur de fond ?",
        answers: ["background-color", "bgcolor", "color-background", "background"],
        correctAnswer: "background-color"
    },
    {
        statement: "Comment cacher un élément tout en conservant son espace ?",
        answers: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
        correctAnswer: "visibility: hidden"
    },
    {
        statement: "Quelle propriété ajoute une marge extérieure gauche ?",
        answers: ["padding-left", "margin-left", "spacing-left", "left-margin"],
        correctAnswer: "margin-left"
    },
    {
        statement: "Comment centrer verticalement un texte dans un conteneur ?",
        answers: ["vertical-align: middle", "text-align: center", "align-items: center", "line-height: height"],
        correctAnswer: "line-height: [hauteur_du_conteneur]"
    },
    {
        statement: "Quelle propriété transforme le texte en italique ?",
        answers: ["font-italic", "font-style: italic", "text-style: italic", "italic: true"],
        correctAnswer: "font-style: italic"
    },
    {
        statement: "Quelle pseudo-classe cible un élément au focus ?",
        answers: [":active", ":hover", ":focus", ":target"],
        correctAnswer: ":focus"
    },
    {
        statement: "Quelle propriété ajoute un contour autour d'un élément sans affecter sa taille ?",
        answers: ["border", "outline", "box-shadow", "stroke"],
        correctAnswer: "outline"
    },
    {
        statement: "Comment appliquer un style à la première ligne d'un paragraphe ?",
        answers: [":first-line", "::first-line", ":start-line", "::line(1)"],
        correctAnswer: "::first-line"
    },
    {
        statement: "Quelle unité est relative à la police du document racine ?",
        answers: ["em", "rem", "px", "vw"],
        correctAnswer: "rem"
    },
    {
        statement: "Quelle propriété contrôle l'ordre des éléments flex ?",
        answers: ["flex-order", "order", "flex-index", "z-index"],
        correctAnswer: "order"
    },
    {
        statement: "Quelle propriété définit l'opacité d'un élément ?",
        answers: ["transparency", "opacity", "alpha", "visibility"],
        correctAnswer: "opacity"
    },
    {
        statement: "Quelle valeur de display rend un élément invisible ?",
        answers: ["hidden", "none", "invisible", "transparent"],
        correctAnswer: "none"
    },
    {
        statement: "Comment cibler tous les éléments &lt;p&gt; à l'intérieur d'un div avec la classe 'container' en CSS imbriqué ?",
        answers: [".container p", ".container &gt; p", "div &gt; p", "div .p"],
        correctAnswer: ".container p"
    },
    {
        statement: "Quelle propriété aligne le texte à droite ?",
        answers: ["text-align: end", "text-align: right", "align: right", "direction: rtl"],
        correctAnswer: "text-align: right"
    },
    {
        statement: "Quelle propriété contrôle l'espace entre les mots ?",
        answers: ["word-spacing", "letter-spacing", "text-spacing", "spacing"],
        correctAnswer: "word-spacing"
    }
]
};

const quizCssIntermediate = {
    title: "CSS Intermédiaire",
    level: "intermediate",
    questions: [
    {
        statement: "Quelle propriété permet des transitions fluides ?",
        answers: ["animation", "transform", "transition", "keyframes"],
        correctAnswer: "transition"
    },
    {
        statement: "Comment cibler un élément avec l'attribut 'data-role='menu'' ?",
        answers: [".menu", "[data-role]", "[data-role='menu']", "#menu"],
        correctAnswer: "[data-role='menu']"
    },
    {
        statement: "Quelle règle permet des requêtes média pour mobile ?",
        answers: ["@mobile", "@media (max-width: 768px)", "@responsive", "@breakpoint"],
        correctAnswer: "@media (max-width: 768px)"
    },
    {
        statement: "Quelle valeur positionne un élément par rapport au viewport ?",
        answers: ["relative", "absolute", "fixed", "sticky"],
        correctAnswer: "fixed"
    },
    {
        statement: "Quelle propriété CSS Grid définit les colonnes ?",
        answers: ["grid-template-rows", "grid-columns", "grid-template-columns", "grid-flow"],
        correctAnswer: "grid-template-columns"
    },
    {
        statement: "Comment créer un dégradé linéaire de gauche à droite ?",
        answers: [
            "background: linear-gradient(to right, red, blue)",
            "background: gradient(left, red, blue)",
            "background: linear-gradient(90deg, red, blue)",
            "background: horizontal-gradient(red, blue)"
        ],
        correctAnswer: "background: linear-gradient(to right, red, blue)"
    },
    {
        statement: "Quelle propriété contrôle l'ordre des éléments flex ?",
        answers: ["flex-order", "order", "flex-index", "z-index"],
        correctAnswer: "order"
    },
    {
        statement: "Que fait 'transform: translateX(50%)' ?",
        answers: [
            "Tourne l'élément de 50 degrés",
            "Déplace l'élément de 50px vers la droite",
            "Déplace l'élément de 50% de sa largeur",
            "Met à l'échelle à 50%"
        ],
        correctAnswer: "Déplace l'élément de 50% de sa largeur"
    },
    {
        statement: "Comment utiliser une variable CSS personnalisée ?",
        answers: ["var(--color)", "$color", "variable(--color)", "@color"],
        correctAnswer: "var(--color)"
    },
    {
        statement: "Quelle propriété anime un élément avec @keyframes ?",
        answers: ["transition", "animate", "animation", "keyframe"],
        correctAnswer: "animation"
    },
    {
        statement: "Comment cibler chaque 3ème élément d'une liste ?",
        answers: [":nth-child(3n)", ":every(3)", ":child(3)", ":nth(3)"],
        correctAnswer: ":nth-child(3n)"
    },
    {
        statement: "Quelle propriété gère l'empilement des contextes ?",
        answers: ["stack", "z-index", "layer", "position"],
        correctAnswer: "z-index"
    },
    {
        statement : "Quelle propriété Flexbox permet de gérer l'espace entre les éléments ?",
        answers : ["gap", "space-between", "justify-items", "align-items"],
        correctAnswer : "gap"
    },
    {
        statement: "Quelle pseudo-classe cible un élément vide ?",
        answers: [":blank", ":void", ":empty", ":no-content"],
        correctAnswer: ":empty"
    },
    {
        statement: "Comment appliquer un style d'impression spécifique ?",
        answers: [
            "@media print",
            "@media screen",
            "&lt;link media='print'&gt;",
            "@print"
        ],
        correctAnswer: "@media print"
    },
    {
        statement: "Quelle propriété contrôle l'aspect ratio ?",
        answers: ["aspect-ratio", "ratio", "size-ratio", "proportion"],
        correctAnswer: "aspect-ratio"
    },
    {
        statement: "Comment créer un masque de découpe circulaire ?",
        answers: [
            "clip-path: circle(50%)",
            "mask: circle",
            "border-radius: 50%",
            "shape-outside: circle"
        ],
        correctAnswer: "clip-path: circle(50%)"
    },
    {
        statement: "Quelle propriété optimise le rendu des polices ?",
        answers: ["font-smoothing", "text-rendering", "antialiased", "font-weight"],
        correctAnswer: "text-rendering"
    },
    {
        statement: "Quelle valeur de 'white-space' empêche le retour à la ligne ?",
        answers: ["nowrap", "pre", "no-wrap", "inline"],
        correctAnswer: "nowrap"
    },
    {
        statement: "Comment créer un conteneur grid à 12 colonnes égales ?",
        answers: [
            "grid-template-columns: repeat(12, 1fr)",
            "grid: 12 columns",
            "grid-columns: 12",
            "grid-template: 12"
        ],
        correctAnswer: "grid-template-columns: repeat(12, 1fr)"
    },
    {
        statement: "Quelle propriété contrôle l'alignement vertical en Grid ?",
        answers: ["align-items", "justify-content", "place-items", "vertical-align"],
        correctAnswer: "align-items"
    },
    {
        statement: "Comment flouter un élément ?",
        answers: ["filter: blur(5px)", "blur: 5px", "effect: blur", "transform: blur(5px)"],
        correctAnswer: "filter: blur(5px)"
    },
    {
        statement: "Quelle propriété permet un débordement scrollable ?",
        answers: ["overflow: auto", "scroll: enable", "overflow-y: scroll", "scrollable: true"],
        correctAnswer: "overflow: auto"
    },
    {
        statement: "Que fait 'will-change: transform' ?",
        answers: [
            "Applique une transformation immédiate",
            "Optimise les performances pour les animations",
            "Force le recalcul du layout",
            "Déclenche un reflow"
        ],
        correctAnswer: "Optimise les performances pour les animations"
    },
    {
        statement: "Comment créer une grille CSS avec un espace de 20px entre les colonnes ?",
        answers: [
            "grid-gap: 20px;",
            "column-gap: 20px;",
            "grid-template-columns: gap(20px);",
            "spacing: 20px;"
        ],
        correctAnswer: "column-gap: 20px;"
    },
    {
        statement: "Quelle propriété crée un reflet CSS ?",
        answers: ["reflect", "box-reflect", "mirror", "filter: reflection"],
        correctAnswer: "box-reflect"
    },
    {
        statement: "Comment centrer un élément absolu ?",
        answers: [
            "top: 50%; left: 50%; transform: translate(-50%, -50%)",
            "margin: auto",
            "position: center",
            "center: true"
        ],
        correctAnswer: "top: 50%; left: 50%; transform: translate(-50%, -50%)"
    },
    {
        statement: "Quelle unité est relative à la racine ?",
        answers: ["em", "rem", "vw", "ch"],
        correctAnswer: "rem"
    },
    {
        statement: "Quelle propriété crée une ombre portée ?",
        answers: ["drop-shadow", "box-shadow", "filter: shadow", "text-shadow"],
        correctAnswer: "box-shadow"
    },
    {
        statement: "Comment cibler la dernière occurrence d'une classe ?",
        answers: [":last-child", ":nth-last-child(1)", ":last-of-type", ":end"],
        correctAnswer: ":nth-last-child(1)"
    },
    {
        statement: "Quelle propriété mix-blend-mode permet un overlay ?",
        answers: ["multiply", "overlay", "screen", "normal"],
        correctAnswer: "multiply"
    },
    {
        statement: "Comment forcer l'héritage d'une propriété ?",
        answers: ["inherit", "initial", "unset", "revert"],
        correctAnswer: "inherit"
    },
    {
        statement: "Quelle pseudo-classe cible les éléments invalides ?",
        answers: [":invalid", ":not-valid", ":error", ":incorrect"],
        correctAnswer: ":invalid"
    },
    {
        statement: "Comment appliquer un style aux éléments pairs d'une liste ?",
        answers: [":even", ":nth-child(2n)", ":pair", ":alternate"],
        correctAnswer: ":nth-child(2n)"
    },
    {
        statement: "Quelle propriété contrôle la visibilité des backfaces en 3D ?",
        answers: ["backface-visibility", "transform-style", "perspective", "visibility"],
        correctAnswer: "backface-visibility"
    },
{
        statement: "Quelle propriété permet de redimensionner un élément ?",
        answers: ["resize", "scale", "transform", "size"],
        correctAnswer: "resize"
    },
    {
        statement: "Comment créer une animation infinie ?",
        answers: ["repeat: infinite", "animation: infinite", "animation-iteration-count: infinite", "loop: true"],
        correctAnswer: "animation-iteration-count: infinite"
    },
    {
        statement: "Quelle propriété crée un masque avec SVG ?",
        answers: ["clip-path", "mask-image", "svg-mask", "filter"],
        correctAnswer: "clip-path"
    },
    {
        statement: "Comment appliquer un style aux éléments impairs d'une liste ?",
        answers: [":nth-child(2n)", ":odd", ":nth-child(odd)", ":impair-style"],
        correctAnswer: ":odd"
    },
    {
        statement: "Quelle propriété contrôle la perspective en 3D ?",
        answers: ["perspective", "transform-style", "3d", "view-distance"],
        correctAnswer: "perspective"
    },
    {
        statement: "Quel format d'image permet la transparence et une meilleure compression que PNG ?",
        answers: ["JPEG", "GIF", "SVG", "WebP"],
        correctAnswer: "WebP"
    },
    {
        statement: "Quelle propriété mélange les arrière-plans ?",
        answers: ["background-blend-mode", "mix-blend-mode", "blend", "filter: blend"],
        correctAnswer: "background-blend-mode"
    },
    {
        statement: "Quelle propriété CSS permet de gérer la casse du texte ?",
        answers: ["text-transform", "text-case", "font-style", "letter-spacing"],
        correctAnswer: "text-transform"
    },
    {
        statement: "Quelle propriété contrôle la vitesse d'une animation ?",
        answers: ["animation-speed", "animation-duration", "animation-timing", "transition-speed"],
        correctAnswer: "animation-duration"
    },
    {
        statement: "Comment cibler les navigateurs Firefox uniquement ?",
        answers: [
            "@-firefox url()",
            "@supports (-moz-appearance:none)",
            "@browser (type=firefox-disp)",
            "Impossible"
        ],
        correctAnswer: "@supports (-moz-appearance:none)"
    },
    {
        statement: "Quelle propriété permet un défilement fluide ?",
        answers: ["scroll-behavior: smooth", "overflow: smooth", "smooth-scroll", "scroll-snap"],
        correctAnswer: "scroll-behavior: smooth"
    },
    {
        statement: "Comment créer un effet de fondu en entrée ?",
        answers: [
            "@keyframes fadeIn { from { opacity: 0; } }",
            "transition: smooth 1s",
            "opacity-transition: 1s ease-in",
            "fade-effect: true"
        ],
        correctAnswer: "@keyframes fadeIn { from { opacity: 0; } }"
    },
    {
        statement: "Quelle propriété CSS Grid aligne le contenu verticalement ?",
        answers: ["align-content", "justify-content", "place-content", "grid-align"],
        correctAnswer: "align-content"
    },
    {
        statement: "Quelle valeur positionne un élément de façon à ce qu'il reste visible lorsqu'on scrolle vers le bas ?",
        answers: ["sticky", "fixed", "relative", "static"],
        correctAnswer: "sticky"
    },
    {
        statement: "Quelle propriété CSS permet de limiter le nombre de caractères par ligne pour améliorer la lisibilité ?",
        answers: ["max-width", "text-overflow", "ch", "line-clamp"],
        correctAnswer: "ch"
    }
    ]
};

const quizJsBasics = {
    title: "JavaScript Débutant",
    level: "novice",
    questions: [
        {
            statement: "Comment déclarer une variable constante ?",
            answers: ["const x = 5", "let x = 5", "var x = 5", "constant x = 5"],
            correctAnswer: "const x = 5"
        },
        {
            statement: "Quelle méthode affiche un message dans la console ?",
            answers: ["console.log()", "alert()", "print()", "log()"],
            correctAnswer: "console.log()"
        },
        {
            statement: "Quel opérateur vérifie l'égalité de valeur ET type ?",
            answers: ["==", "===", "=", "!=="],
            correctAnswer: "==="
        },
        {
            statement: "Comment convertir une chaîne en nombre entier en précisant la base ?",
            answers: ["Number()", "parseInt()", "String.toNumber()", "Math.floor()"],
            correctAnswer: "parseInt()"
        },
        {
            statement: "Quelle boucle parcourt un tableau ?",
            answers: ["for...in", "while", "for...of", "do...while"],
            correctAnswer: "for...of"
        },
        {
            statement: "Comment vérifier si une variable est un tableau ?",
            answers: ["typeof x === 'array'", "x.isArray()", "Array.isArray(x)", "x instanceof array"],
            correctAnswer: "Array.isArray(x)"
        },
        {
            statement: "Quelle méthode ajoute un élément à la fin d'un tableau ?",
            answers: ["push()", "pop()", "shift()", "unshift()"],
            correctAnswer: "push()"
        },
        {
            statement: "Comment créer une fonction nommée ?",
            answers: ["function myFunc() {}", "() =&gt; {}", "const myFunc = function() {}", "def myFunc() {}"],
            correctAnswer: "function myFunc() {}"
        },
        {
            statement: "Quel objet représente la fenêtre du navigateur ?",
            answers: ["document", "window", "global", "navigator"],
            correctAnswer: "window"
        },
        {
            statement: "Quelle méthode permet de sélectionner tous les éléments d'une classe ?",
            answers: ["document.querySelector()", "document.getElementById()", "document.getElementsByClassName()", "document.find('.class')"],
            correctAnswer: "document.getElementsByClassName()"
        },
        {
            statement: "Que retourne '2' + 2 ?",
            answers: ["4", "'22'", "NaN", "TypeError"],
            correctAnswer: "'22'"
        },
        {
            statement: "Quelle est la syntaxe correcte d'une boucle for ?",
            answers: [
                "for (let i = 0; i &lt; 10; i++)",
                "for (i = 0; i &lt; 10; i++)",
                "for (let i &lt; 10; i++)",
                "for (let i = 0; i &lt; 10)"
            ],
            correctAnswer: "for (let i = 0; i &lt; 10; i++)"
        },
        {
            statement: "Quelle méthode enlève le dernier élément d'un tableau ?",
            answers: ["shift()", "pop()", "slice()", "removeLast()"],
            correctAnswer: "pop()"
        },
        {
            statement: "Quelle instruction arrête une boucle ?",
            answers: ["exit", "stop", "break", "return"],
            correctAnswer: "break"
        },
        {
            statement: "Comment ajouter un écouteur d'événement ?",
            answers: ["addEventListener()", "onEvent()", "attachEvent()", "listen()"],
            correctAnswer: "addEventListener()"
        },
        {
            statement: "Quelle méthode transforme un tableau en chaîne de caractères ?",
            answers: ["string()", "join()", "split()", "concat()"],
            correctAnswer: "join()"
        },
        {
            statement: "Que fait '!!x' ?",
            answers: [
                "Convertit en booléen",
                "Double négation",
                "Crée une copie de x",
                "Erreur de syntaxe"
            ],
            correctAnswer: "Convertit en booléen"
        },
        {
            statement: "Quelle est une différence entre switch et if...else ?",
            answers: [
                "switch est plus performant que if...else dans tous les cas",
                "if...else ne peut comparer que des nombres",
                "switch ne fonctionne qu'avec des chaînes de caractères",
                "switch est utile quand il y a plusieurs cas à comparer"
            ],
            correctAnswer: "switch est utile quand il y a plusieurs cas à comparer"
        },
        {
            statement: "Quelle méthode crée un élément HTML ?",
            answers: ["createElement()", "makeElement()", "new Element()", "document.build()"],
            correctAnswer: "createElement()"
        },
        {
            statement: "Quel mot-clé retourne une valeur de fonction ?",
            answers: ["return", "break", "exit", "end"],
            correctAnswer: "return"
        },
        {
            statement: "Comment obtenir la longueur d'une chaîne ?",
            answers: ["str.length", "str.count", "str.size", "length(str)"],
            correctAnswer: "str.length"
        },
        {
            statement: "Quelle méthode appelle une fonction après un délai ?",
            answers: ["setTimeout()", "delay()", "wait()", "setInterval()"],
            correctAnswer: "setTimeout()"
        },
        {
            statement: "Que retourne [1, 2][3] ?",
            answers: ["undefined", "null", "Erreur", "3"],
            correctAnswer: "undefined"
        },
        {
            statement: "Comment cloner superficiellement un tableau ?",
            answers: ["[...arr]", "arr.clone()", "Array.copy(arr)", "arr.slice(0)"],
            correctAnswer: "arr.slice(0)"
        },
        {
            statement: "Quel opérateur vérifie une inégalité stricte ?",
            answers: ["!=", "!==", "not", "&gt;&lt;"],
            correctAnswer: "!=="
        },
        {
            statement: "Comment concaténer deux tableaux ?",
            answers: ["arr1 + arr2", "arr1.concat(arr2)", "arr1.join(arr2)", "concat(arr1, arr2)"],
            correctAnswer: "arr1.concat(arr2)"
        },
        {
            statement: "Quelle syntaxe crée une fonction fléchée ?",
            answers: ["() =&gt; {}", "function =&gt; {}", "() -&gt; {}", "arrow function() {}"],
            correctAnswer: "() =&gt; {}"
        },
        {
            statement: "Que fait Math.floor(3.9) ?",
            answers: ["3", "4", "3.9", "Error"],
            correctAnswer: "3"
        },
        {
            statement: "Comment accéder au premier élément d'un tableau ?",
            answers: ["arr[1]", "arr[0]", "arr.first", "arr.start"],
            correctAnswer: "arr[0]"
        },
        {
            statement: "Quelle méthode transforme une chaîne en tableau ?",
            answers: ["split()", "join()", "explode()", "toArray()"],
            correctAnswer: "split()"
        },
        {
            statement: "Comment vérifier si une variable est NaN ?",
            answers: ["isNaN()", "NaN()", "Number.isNaN()", "x === NaN"],
            correctAnswer: "Number.isNaN()"
        },
        {
            statement: "Quelle méthode supprime des éléments d'un tableau ?",
            answers: ["splice()", "slice()", "cut()", "remove()"],
            correctAnswer: "splice()"
        },
        {
            statement: "Quel opérateur logique retourne vrai si les deux opérandes sont vrais ?",
            answers: ["||", "&&", "??", "!"],
            correctAnswer: "&&"
        },
        {
            statement: "Quelle syntaxe utilise correctement l'opérateur ternaire ?",
        answers: [
            "let result = (x &gt; 10) ? 'Grand' : 'Petit';",
            "let result = if (x &gt; 10) then 'Grand' else 'Petit';",
            "let result = x &gt; 10 : 'Grand' ? 'Petit';",
            "let result = x ? (x &gt; 10, 'Grand', 'Petit');"
        ],
        correctAnswer: "let result = (x &gt; 10) ? 'Grand' : 'Petit';"
        },
        {
            statement: "Que fait 'use strict' ?",
            answers: [
                "Active le mode strict",
                "Désactive les erreurs",
                "Optimise les performances",
                "Autorise la casse"
            ],
            correctAnswer: "Active le mode strict"
        },
        {
            statement: "Comment supprimer une propriété d'un objet en JavaScript ?",
            answers: ["delete obj.prop", "obj.remove('prop')", "obj.prop = null", "drop obj.prop"],
            correctAnswer: "delete obj.prop"
        },
        {
            statement: "Quelle méthode supprime le premier élément d'un tableau ?",
            answers: ["shift()", "pop()", "removeFirst()", "splice(0,1)"],
            correctAnswer: "shift()"
        },
        {
            statement: "Comment créer une date représentant le 1er janvier 2023 ?",
            answers: [
                "new Date(2023, 0, 1)",
                "new Day('01-01-2023')",
                "Date.create('2023-01-01')",
                "new Date(2023, 1, 1)"
            ],
            correctAnswer: "Les deux réponses"
        },
        {
            statement: "Comment empêcher la modification d'un objet ?",
            answers: [
                "Object.freeze(obj)",
                "Object.protect(obj)",
                "obj.lock()",
                "const obj"
            ],
            correctAnswer: "Object.freeze(obj)"
        },
        {
            statement: "Que retourne Boolean('0') ?",
            answers: ["false", "true", "0", "Error"],
            correctAnswer: "true"
        },
        {
            statement: "Quelle méthode convertit un objet JavaScript en JSON ?",
            answers: [
                "JSON.stringify(obj)",
                "JSON.toText(obj)",
                "obj.toJSON()",
                "serialize(obj)"
            ],
            correctAnswer: "JSON.stringify(obj)"
        },
        {
            statement: "Quelle méthode vérifie si un tableau contient un élément ?",
            answers: [
                "includes()",
                "has()",
                "find()",
                "exists()"
            ],
            correctAnswer: "includes()"
        },
        {
            statement: "Quelle méthode fusionne deux objets ?",
            answers: [
                "Object.assign({}, obj1, obj2)",
                "Object.merge(obj1, obj2)",
                "obj1 + obj2",
                "combine(obj1, obj2)"
            ],
            correctAnswer: "Object.assign({}, obj1, obj2)"
        },
        {
            statement: "Que fait isNaN('123') ?",
            answers: ["true", "false", "Erreur", "null"],
            correctAnswer: "false"
        },
        {
            statement: "Comment générer un nombre aléatoire entre 1 et 10 ?",
            answers: [
                "Math.floor(Math.random() * 10) + 1",
                "random(1, 10)",
                "Math.random(1, 10)",
                "getRandomNumber(1, 10)"
            ],
            correctAnswer: "Math.floor(Math.random() * 10) + 1"
        },
        {
            statement: "Quelle méthode exécute une fonction après 2 secondes ?",
            answers: ["setTimeout(func, 2000)", "delay(2000).then(func)", "wait(2, func)", "func(2s, parameter)"],
            correctAnswer: "setTimeout(func, 2000)"
        },
        {
            statement: "Comment vérifier si une chaîne commence par un certain mot ?",
            answers: [
                "str.startsWith('mot')",
                "str.beginsWith('mot')",
                "str.hasPrefix('mot')",
                "str.indexOf('mot') === 0"
            ],
            correctAnswer: "str.startsWith('mot')"
        },
        {
            statement: "Quelle méthode convertit une chaîne en minuscules ?",
            answers: ["toLowerCase()", "lowerCase()", "convertCase('lower')", "lower('case')"],
            correctAnswer: "toLowerCase()"
        },
        {
            statement: "Comment fusionner deux tableaux en JavaScript ?",
            answers: [
                "[...arr1, ...arr2]",
                "arr1 + arr2",
                "arr1.join(arr2)",
                "merge(arr1, arr2)"
            ],
            correctAnswer: "[...arr1, ...arr2]"
        },
        {
            statement: "Quelle méthode supprime/ajoute des éléments dans un tableau ?",
            answers: ["splice()", "slice()", "cut()", "remove()"],
            correctAnswer: "splice()"
        }
    ]
};

const quizJsIntermediate = {
    title: "JavaScript Intermédiaire",
    level: "intermediate",
    questions: [
        {
            statement: "Qu'est-ce qu'une closure ?",
            answers: [
                "Une fonction anonyme",
                "Une fonction avec accès à son scope parent",
                "Un callback asynchrone",
                "Un objet littéral"
            ],
            correctAnswer: "Une fonction avec accès à son scope parent"
        },
        {
            statement: "Comment gérer une promesse réussie ?",
            answers: [".then()", ".catch()", ".finally()", ".resolve()"],
            correctAnswer: ".then()"
        },
        {
            statement: "Que retourne 'typeof null' ?",
            answers: ["'null'", "'object'", "'undefined'", "'NaN'"],
            correctAnswer: "'object'"
        },
        {
            statement: "Comment créer un objet avec un prototype spécifique ?",
            answers: ["Object.create()", "new Prototype()", "{}", "class"],
            correctAnswer: "Object.create()"
        },
        {
            statement: "Quelle méthode JavaScript permet de détecter si un objet est un proxy ?",
            answers: [
                "Proxy.isProxy(obj)",
                "Reflect.isProxy(obj)",
                "Object.isProxy(obj)",
                "Aucune méthode native"
            ],
            correctAnswer: "Aucune méthode native"
        },
        {
            statement: "Qu'est-ce que le hoisting ?",
            answers: [
                "Le déplacement des variables en haut du scope",
                "Une fonction récursive",
                "L'optimisation du compilateur",
                "Un design pattern"
            ],
            correctAnswer: "Le déplacement des variables en haut du scope"
        },
        {
            statement: "Quelle syntaxe gère les erreurs ?",
            answers: ["try/catch", "error()", "handleError()", ".catch()"],
            correctAnswer: "try/catch"
        },
        {
            statement: "Comment créer une classe en ES6 ?",
            answers: ["class MyClass {}", "function Class() {}", "new Class {}", "createClass()"],
            correctAnswer: "class MyClass {}"
        },
        {
            statement: "Quel mot-clé crée un contexte privé dans une classe ?",
            answers: ["private", "#", "protected", "_"],
            correctAnswer: "#"
        },
        {
            statement: "Que fait Array.prototype.reduce() ?",
            answers: [
                "Filtre les éléments",
                "Réduit le tableau à une valeur unique",
                "Clone le tableau",
                "Modifie chaque élément"
            ],
            correctAnswer: "Réduit le tableau à une valeur unique"
        },
        {
            statement: "Comment utiliser await ?",
            answers: [
                "Dans une fonction async",
                "Avec .then()",
                "Dans une boucle for",
                "Sans mot-clé particulier"
            ],
            correctAnswer: "Dans une fonction async"
        },
        {
            statement: "Qu'est-ce que l'event bubbling ?",
            answers: [
                "La propagation des événements du parent à l'enfant",
                "La propagation des événements de l'enfant au parent",
                "Un type d'événement personnalisé",
                "Une erreur JavaScript"
            ],
            correctAnswer: "La propagation des événements de l'enfant au parent"
        },
        {
            statement: "Comment empêcher l'ajout de nouvelles propriétés à un objet ?",
            answers: [
                "Object.freeze(obj)",
                "Object.seal(obj)",
                "Object.preventExtensions(obj)",
                "delete obj.prototype"
            ],
            correctAnswer: "Object.preventExtensions(obj)"
        },
        {
            statement: "Quelle méthode HTTP utilise fetch() par défaut ?",
            answers: ["GET", "POST", "PUT", "HEAD"],
            correctAnswer: "GET"
        },
        {
            statement: "Comment désactiver le cache avec fetch() ?",
            answers: [
                "headers: { 'Cache-Control': 'no-cache' }",
                "cache: 'reload'",
                "cache: 'no-store'",
                "Aucune de ces réponses"
            ],
            correctAnswer: "cache: 'no-store'"
        },
        {
            statement: "Qu'est-ce qu'un IIFE ?",
            answers: [
                "Une fonction immédiatement invoquée",
                "Un design pattern",
                "Un module ES6",
                "Une fonction fléchée"
            ],
            correctAnswer: "Une fonction immédiatement invoquée"
        },
        {
            statement: "Comment vérifier si une propriété est énumérable ?",
            answers: [
                "propertyIsEnumerable()",
                "hasOwnProperty()",
                "Object.keys()",
                "in operator"
            ],
            correctAnswer: "propertyIsEnumerable()"
        },
        {
            statement: "Quelle méthode retourne les clés d'un objet ?",
            answers: ["Object.keys()", "Object.values()", "Object.entries()", "for...in"],
            correctAnswer: "Object.keys()"
        },
        {
            statement: "Quel opérateur permet d'accéder à une propriété optionnelle sans erreur ?",
            answers: [
                "?.",
                "??",
                "&&",
                "!== undefined"
            ],
            correctAnswer: "?."
        },
        {
            statement: "Quelle est la meilleure façon de comparer deux objets en JavaScript ?",
            answers: [
                "JSON.stringify(obj1) === JSON.stringify(obj2)",
                "obj1 == obj2",
                "obj1 === obj2",
                "Object.compare(obj1, obj2)"
            ],
            correctAnswer: "JSON.stringify(obj1) === JSON.stringify(obj2)"
        },
        {
            statement: "Quelle API permet le stockage persistant ?",
            answers: ["sessionStorage", "localStorage", "Cookie", "Cache"],
            correctAnswer: "localStorage"
        },
        {
            statement: "Comment créer un Web Worker ?",
            answers: [
                "new Worker('script.js')",
                "worker.create()",
                "navigator.worker()",
                "Thread.start()"
            ],
            correctAnswer: "new Worker('script.js')"
        },
        {
            statement: "Qu'est-ce qu'un WeakMap ?",
            answers: [
                "Un Map avec des clés faibles",
                "Un tableau associatif",
                "Une structure de données immutable",
                "Un Map non ordonné"
            ],
            correctAnswer: "Un Map avec des clés faibles"
        },
        {
            statement: "Comment gérer les dépendances circulaires ?",
            answers: [
                "Avec des modules ES6",
                "En utilisant require()",
                "C'est impossible",
                "Avec des design patterns"
            ],
            correctAnswer: "Avec des modules ES6"
        },
        {
            statement: "Quelle méthode trie un tableau sur place ?",
            answers: ["sort()", "sorted()", "order()", "arrange()"],
            correctAnswer: "sort()"
        },
        {
            statement: "Comment vérifier si un tableau contient ou non un objet spécifique en JavaScript ?",
            answers: [
                "array.find(obj)",
                "array.has(obj)",
                "array.some(el =&gt; el === obj)",
                "array.contains(obj)"
            ],
            correctAnswer: "array.some(el =&gt; el === obj)"
        },
        {
            statement: "Qu'est-ce que le Temporal Dead Zone (TDZ) ?",
            answers: [
                "La période avant la déclaration d'une variable let/const",
                "Une erreur de référence",
                "Un bug de navigateur",
                "Un état du garbage collector"
            ],
            correctAnswer: "La période avant la déclaration d'une variable let/const"
        },
        {
            statement: "Comment créer un proxy en ES6 ?",
            answers: ["new Proxy()", "Proxy.create()", "Object.proxy()", "createProxy()"],
            correctAnswer: "new Proxy()"
        },
        {
            statement: "Que fait Object.freeze() ?",
            answers: [
                "Rend l'objet immuable",
                "Clone l'objet",
                "Supprime les propriétés",
                "Active le mode strict"
            ],
            correctAnswer: "Rend l'objet immuable"
        },
        {
            statement: "Comment utiliser les modules ES6 dans le navigateur ?",
            answers: [
                "&lt;script type='module'&gt;",
                "&lt;script module&gt;",
                "import.meta",
                "Node.js uniquement"
            ],
            correctAnswer: "&lt;script type='module'&gt;"
        },
        {
            statement: "Quelle méthode permet de regrouper des éléments d'un tableau par clé ?",
            answers: [
                "array.reduce()",
                "array.regroup()",
                "array.map()",
                "array.sort()"
            ],
            correctAnswer: "array.reduce()"
        },
        {
            statement: "Quelle API permet de manipuler l'historique ?",
            answers: ["History API", "window.location", "navigator.history", "URLSearchParams"],
            correctAnswer: "History API"
        },
        {
            statement: "Comment annuler une requête fetch() ?",
            answers: [
                "Avec AbortController",
                "fetch.cancel()",
                "XMLHttpRequest uniquement",
                "Impossible"
            ],
            correctAnswer: "Avec AbortController"
        },
        {
            statement: "Quelle méthode crée une promesse ?",
            answers: [
                "new Promise((resolve, reject) =&gt; {})",
                "Promise.create()",
                "async function() {}",
                "fetch()"
            ],
            correctAnswer: "new Promise((resolve, reject) =&gt; {})"
        },
        {
            statement: "Qu'est-ce qu'un generator function ?",
            answers: [
                "Une fonction avec yield",
                "Une fonction asynchrone",
                "Une fonction récursive",
                "Une IIFE"
            ],
            correctAnswer: "Une fonction avec yield"
        },
    {
            statement: "Quelle méthode permet de fusionner deux tableaux immuablement ?",
            answers: ["concat()", "push()", "merge()", "spread operator [...arr1, ...arr2]"],
            correctAnswer: "spread operator [...arr1, ...arr2]"
        },
        {
            statement: "Comment créer une fonction à mémoire (memoization) ?",
            answers: [
                "Avec un cache interne utilisant un objet ou Map",
                "En déclarant une variable globale",
                "Avec une closure mais sans cache",
                "Avec une classe"
            ],
            correctAnswer: "Avec un cache interne utilisant un objet ou Map"
        },
        {
            statement: "Qu'est-ce que le currying ?",
            answers: [
                "Transformer une fonction à plusieurs arguments en fonctions imbriquées",
                "Une erreur de syntaxe",
                "Un design pattern de classe",
                "Une méthode de tableau"
            ],
            correctAnswer: "Transformer une fonction à plusieurs arguments en fonctions imbriquées"
        },
        {
            statement: "Comment créer une promesse qui se résout après 1 seconde ?",
            answers: [
                "new Promise(res =&gt; setTimeout(res, 1000))",
                "delay(1000).then()",
                "setTimeout.asPromise(1000)",
                "Promise.wait(1000)"
            ],
            correctAnswer: "new Promise(res =&gt; setTimeout(res, 1000))"
        },
        {
            statement: "Quel est l'avantage des WeakRef en JavaScript ?",
            answers: [
                "Ils permettent au garbage collector de récupérer des objets non utilisés",
                "Ils accélèrent l'accès aux objets",
                "Ils empêchent les fuites de mémoire",
                "Ils remplacent complètement WeakMap"
            ],
            correctAnswer: "Ils permettent au garbage collector de récupérer des objets non utilisés"
        },
        {
            statement: "Quelle approche moderne permet d'éviter le callback hell ?",
            answers: [
                "Utiliser les promesses",
                "Utiliser async/await",
                "Écrire tout le code en synchrone",
                "Utiliser un setTimeout() pour chaque callback"
            ],
            correctAnswer: "Utiliser async/await"
        },
        {
            statement: "Qu'est-ce qu'un WeakSet ?",
            answers: [
                "Un Set avec des références faibles",
                "Un Set non ordonné",
                "Un Set immutable",
                "Un Set à clés uniques"
            ],
            correctAnswer: "Un Set avec des références faibles"
        },
        {
            statement: "Quelle est la meilleure façon de détecter un clic droit en JavaScript ?",
            answers: [
                "event.button === 2",
                "event.which(right)",
                "event.clickRight === true",
                "event.isRightClick()"
            ],
            correctAnswer: "event.button === 2"
        },
        {
            statement: "Qu'est-ce que le Event Loop ?",
            answers: [
                "Le mécanisme de gestion des tâches asynchrones",
                "Une boucle while(true)",
                "Un design pattern",
                "Une fonction récursive"
            ],
            correctAnswer: "Le mécanisme de gestion des tâches asynchrones"
        },
        {
            statement: "Comment annuler un setTimeout en cours d'exécution ?",
            answers: [
                "clearTimeout(timeoutId)",
                "timeoutId.cancel()",
                "stopTimeout(timeoutId)",
                "setTimeout(null)"
            ],
            correctAnswer: "clearTimeout(timeoutId)"
        },
        {
            statement: "Quelle méthode permet de sérialiser une Date en JSON ?",
            answers: [
                "JSON.stringify() gère nativement les dates",
                "Utiliser toISOString() avant",
                "Impossible",
                "Utiliser un reviver"
            ],
            correctAnswer: "Utiliser toISOString() avant"
        },
        {
            statement: "Quelle est la meilleure façon de sélectionner tous les éléments d'une classe en JavaScript ?",
            answers: [
                "document.querySelectorAll('.maClasse')",
                "document.getElementsByClassName('maClasse')",
                "document.querySelector('.maClasse')",
                "document.getElementById('maClasse')"
            ],
            correctAnswer: "document.querySelectorAll('.maClasse')"
        },
        {
            statement: "Qu'est-ce qu'un tag function ?",
            answers: [
                "Une fonction qui traite des littéraux de template",
                "Une fonction fléchée",
                "Une méthode de débogage",
                "Une fonction qui génère des identifiants uniques"
            ],
            correctAnswer: "Une fonction qui traite des littéraux de template"
        },
        {
            statement: "Comment vérifier si un objet est un prototype d'un autre ?",
            answers: [
                "Object.prototype.isPrototypeOf()",
                "Object.isIndependant()",
                "Object.hasOwnProperty()",
                "Object.getPrototypeOf() === autreObjet"
            ],
            correctAnswer: "Object.prototype.isPrototypeOf()"
        },
        {
            statement: "Quelle API permet de copier du texte dans le presse-papier ?",
            answers: [
                "navigator.clipboard.writeText()",
                "document.copyText()",
                "window.clipboardCopy()",
                "copyToClipboard()"
            ],
            correctAnswer: "navigator.clipboard.writeText()"
        }
    ]
};

// Generate random array of numb questions from the database

const shuffleArr = (array,numb) => {
    let shuffledArray = array;
    // Shuffle : Fisher-Yates (Knuth)
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    };
    shuffledArray = shuffledArray.slice(0, numb);
    return shuffledArray
};

const questionSampleArray = shuffleArr(quizHtmlBasics.questions, 10);
// Check console - To delete in final version TODO
console.log(questionSampleArray);

// Declare score

let finalScore = 0;

// Declare colors

const rightAnswerColor = "rgba(161, 234, 31, 0.4)";
const wrongAnswerColor = "rgba(234, 172, 131, 0.4)";

// Declare elements

const quizTitle = document.querySelector("#quiz-title");
const questionNumber = document.querySelector("#question-number");
const questionStatement = document.querySelector("#question-statement");

const answerButtons = document.querySelectorAll(".answer-button");
const answerOne = document.querySelector(".answer1");
const answerTwo = document.querySelector(".answer2");
const answerThree = document.querySelector(".answer3");
const answerFour = document.querySelector(".answer4");

const nextButton = document.querySelector("#next-button");

const endButtons = document.querySelectorAll(".end-button");
// TODO
//const tryAnotherButton = document.querySelector(".try-another-button"); // Other test from same level ?
//const retryButton = document.querySelector(".retry-button"); // Same test

let rk = 0;

// Display Subject

quizTitle.innerHTML = quizHtmlBasics.title;

// Function !Disable element (switch to lock/unlock if doesn't work well) TODO?

const disableFunc = elementSelector => {
    const elementsToDisable = document.querySelectorAll(elementSelector);
    if (elementsToDisable) {
        elementsToDisable.forEach(elem => elem.disabled = !elem.disabled);
    }
}

// Click on any answer-button :
// - Unlock next-button
// - Disable all answer-buttons
// - Display the answer (black border)
// - Update score
// - Display right and wrong answers (green/red) - change colors TODO (update with nice colors)


answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.border = "3px solid black";
        disableFunc("#next-button");
        disableFunc(".answer-button");
        // Update score
        if (btn.innerHTML === (questionSampleArray[rk]).correctAnswer) {
            finalScore++;
            console.log(`current score is : ${finalScore}`);
        }
        // Display right and wrong answers (green/red)
        answerOne.style.backgroundColor = (answerOne.innerHTML === (questionSampleArray[rk]).correctAnswer) ? rightAnswerColor : wrongAnswerColor ;
        answerTwo.style.backgroundColor = (answerTwo.innerHTML === (questionSampleArray[rk]).correctAnswer) ? rightAnswerColor : wrongAnswerColor ;
        answerThree.style.backgroundColor = (answerThree.innerHTML === (questionSampleArray[rk]).correctAnswer) ? rightAnswerColor : wrongAnswerColor ;
        answerFour.style.backgroundColor = (answerFour.innerHTML === (questionSampleArray[rk]).correctAnswer) ? rightAnswerColor : wrongAnswerColor ;
    });
});

// Filling new questions

const fillQuestion = rk => {
    // Question
    questionNumber.innerText = "Question " + rk;
    // Statement
    questionStatement.innerHTML = questionSampleArray[rk].statement;
    // Answers
    answerOne.innerHTML = (questionSampleArray[rk].answers[0]) || "";
    answerTwo.innerHTML = (questionSampleArray[rk].answers[1]) || "";
    answerThree.innerHTML = (questionSampleArray[rk].answers[2]) || "";
    answerFour.innerHTML = (questionSampleArray[rk].answers[3]) || "";
    // Use a loop for answers better/worse performance ?  TODO (optimisation)
};

// Click on next-button :
// - Increment question rank
// - Fill next question
// - Disable next-button
// - Unable answer-buttons
// - Reset initial style answer-buttons (initial colors & borders)
// - Only display non-empty answer-buttons
// - After last question : 
//          - display final score
//          - display message
//          - display 2 buttons (retry & go back to menu)


nextButton.addEventListener("click", () => {
    rk++;
    if (rk < questionSampleArray.length) { // If another question exists
        fillQuestion(rk);
        disableFunc("#next-button");
        disableFunc(".answer-button");
        // Reset initial style of answer-buttons
        answerButtons.forEach(btn => {
            btn.style.border = "1px solid var(--background-light-color)";
            btn.style.backgroundColor = "rgba(241, 234, 221, 0.4)";
            btn.innerHTML !== "" ? btn.style.display = "block" : btn.style.display = "none";
        });
    } else { // If it was the last question
        questionNumber.innerText = "";
        const scorePercent = Math.floor(100 * finalScore / rk);
        if (scorePercent === 100) {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> Un.e vrai.e champion.ne, rien ne t'arrête !`;
        } else if (scorePercent >= 80) {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> Presque parfait ! Encore un petit effort et ce sera du 100% !`;
        } else if (scorePercent >= 50) {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> Pas mal ! Tu es à mi-chemin, continue comme ça, tu es sur la bonne voie !`;
        } else if (scorePercent >= 20) {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> C’est en forgeant qu’on devient forgeron ! Ne lâche rien !`;
        } else {
            questionStatement.innerHTML = `Score final : ${scorePercent}% <br> Tous les champions ont commencé quelque part ! Ce n’est qu’un début, tu vas y arriver ! `;
        };
        answerButtons.forEach(btn => {
            btn.style.display = "none";
        });
        nextButton.style.display = "none";
        endButtons.forEach(btn => {
            btn.style.display = "flex";
        })
    }
});

// Try another quizz TODO
// Lancer un challenge au hasard ? Ou revenir au menu des thématiques ?