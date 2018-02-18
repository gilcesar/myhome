Definiçoes:
Horario de Ensolacao: 	[07:00] as [18:00]
Horario de Geraçao: 	[08:30] as [16:00]
Horario de Uso: 		[17:45] as [01:00]
Horario de Repouso: 	[01:00] as [06:45]
Descarga Maxima:		>= 20%
Descarga Priorizacao:	>= 15%

Regras:

1. Se (Descarga Maxima && sem geraçao), passar para modo rede
2. Se (Horario de Repouso && iluminaçao desligada), desligar geladeira
	2.1 Ao ligar alguma iluminaçao, ligar geladeira
3. Se (Descarga Priorizacao), geladeira em modo rede