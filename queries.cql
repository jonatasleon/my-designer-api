// Query fecho
MATCH (clasp:Clasp) RETURN clasp;

// Query cordao
MATCH (cord:Cord) RETURN cord;

// Query pingente
MATCH (pendant:Pendant) RETURN pendant;

// Query pedra de pingente
MATCH (pendantStone:PendantStone) RETURN pendantStone;

// Query pedra de cordão
MATCH (cordStone:CordStone) RETURN cordStone;

// Query peça final
MATCH r=(piece:Piece)-[:CONTAINS|CLOSES_WITH|USES*1..3]-() RETURN r;

// Query para CONTAINS
MATCH p=()-[:CONTAINS]->() RETURN p;

// Query para CLOSES_WITH
MATCH p=()-[:CLOSES_WITH]->() RETURN p;

// Query para USES
MATCH p=()-[:USES]->() RETURN p;

// Query para ATTACHES_TO
MATCH p=()-[:ATTACHES_TO]->() RETURN p;

// Query para FITS_IN
MATCH p=()-[:FITS_IN]->() RETURN p;

// Query para IS_IN
MATCH p=()-[:IS_IN]->() RETURN p;
