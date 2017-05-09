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
