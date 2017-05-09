// Cria os dados básicos do bd
// Cria um fecho com a cor #FFD700
CREATE (clasp:Clasp { alias: 'gancho', color: '#FFD700' })
// Cria uma pedra de pingente com as cores #4D8A18 e #E6E6E6
CREATE (pendantStone:PendantStone { name: 'Agata', colors: ['#4D8A18', '#E6E6E6'] })
// Cria uma pedra de cordao com as cores #4D8A18 e #E6E6E6
CREATE (cordStone:CordStone { name: 'Agata', colors: ['#4D8A18', '#E6E6E6'] })
// Cria um pingente com a cor #FFD700
CREATE (pendant:Pendant { description: 'Pingente de ouro', color: '#FFD700' })
// Cria um cordão feito de palha
CREATE (cord:Cord { material: 'palha', maxPendantPositions: 3 })
// Cria uma peça final com os nós anteriormente  criados
CREATE (piece:Piece { alias: 'Colar de ouro' }),
  (piece)-[:CONTAINS]->(position1:Position { positionNumber: 1 }),
  (piece)-[:CONTAINS]->(position2:Position { positionNumber: 2 }),
  (piece)-[:CONTAINS]->(position3:Position { positionNumber: 3 }),
  (piece)-[:CLOSES_WITH]->(clasp),
  (piece)-[:USES]->(cord)<-[:ATTACHES_TO]-(cordStone),
  (pendantStone)-[:FITS_IN]->(pendant)-[:IS_IN]->(position1)
WITH piece
MATCH r=(piece)-[:CONTAINS|CLOSES_WITH|USES*1..3]-()
RETURN r
