(function() {
    function walk(node)
    {
        var child, next;

        switch ( node.nodeType )
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child )
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;

            case 3: // Text node
                handleText(node);
                break;
        }
    }

    function handleText(textNode)
    {
        var v = textNode.nodeValue;

        v = v.replace(/\bMICHEL TEMER\b/g, "TEMER GOLPISTA GOLPISTA");
      	v = v.replace(/\bMichel Temer\b/g, "Temer Golpista");
      	v = v.replace(/\bPresidente Interino\b/g, "Presidente Sem Voto");
      	v = v.replace(/\bpresidente interino Michel Temer\b/g, "presidente sem voto");
      	v = v.replace(/\bMichel Miguel Elias Temer Lulia\b/g, "Temer Golpista");
      	v = v.replace(/^Michel Miguel Elias Temer Lulia$/g, "Presidente Golpista");
      	v = v.replace(/\bmichel miguel elias temer lulia\b/g, "presidente golpista");
      	v = v.replace(/\bPRESIDENTE MICHEL TEMER\b/g, "PRESIDENTE GOLPISTA SEM VOTO");
      	v = v.replace(/\bPresidente Michel Temer\b/g, "Presidente Golpista Sem Voto");
      	v = v.replace(/\bpresidente michel temer\b/g, "presidente golpista sem voto");
      	v = v.replace(/\bVice-presidente Michel Temer\b/g, "Vice-decorativo e golpista");
      	v = v.replace(/\bVice-Presidente Michel Temer\b/g, "Vice-decorativo e golpista");
      	v = v.replace(/\bvice-presidente Michel Temer\b/g, "Vice-decorativo e golpista");
      	v = v.replace(/\bvice-presidente Michel Temer\b/g, "Vice-decorativo e golpista");

        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);

            new MutationObserver(function() {
              walk(e.originalTarget.body);
            }).observe(e.originalTarget.body, {
              childList: true
            });
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
