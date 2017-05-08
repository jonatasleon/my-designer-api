// Cria os dados básicos do bd
// Cria um fecho com a cor #4D8A18
CREATE (clasp:Clasp { alias: 'gancho', color: '#4D8A18' })
// Cria um cordão feito de palha
CREATE (cord:Cord { material: 'palha', maxPendantPositions: 3 })
// Cria uma pedra com as cores #4D8A18 e #E6E6E6
CREATE (stone:Stone { name: 'Ágata', colors: ['#4D8A18', '#E6E6E6'] })
// Cria um pingente com a cor #FFD700
CREATE (pendant:Pendant { description: 'Pingente de ouro', color: '#FFD700' })
// Cria uma peÃ§a final com os nós anteriormente  criados
CREATE r=(piece:FinalPiece { alias: 'Colar de ouro' })-[:USES]->(cord)<-[:ATTACHES_TO]-(stone)-[:FITS_IN]->(pendant)-[:IS_IN]->(position1:Position { positionNumber: 1 }), (piece)-[:CONTAINS]->(position1), (piece)-[:CONTAINS]->(pos2:Position { positionNumber: 2 } ), (piece)-[:CONTAINS]->(pos3:Position { positionNumber: 3 } ), (piece)-[:CLOSES_WITH]->(clasp)
RETURN r
