/* 
  Author: Thiago Leoni Amaral
  Copyright (c) 2023
  https://linktr.ee/heroleam
*/

// Seleciona o documento ativo
var doc = app.activeDocument;

// Seleciona a camada ativa
var layer = doc.activeLayer;
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];

// Cria o retângulo
var width = artboard.artboardRect[2]-artboard.artboardRect[0] + 28.3465 * 1; // adiciona 2cm à largura
var height = artboard.artboardRect[1]-artboard.artboardRect[3] + 28.3465 * 1; // adiciona 2cm à altura

// Centraliza o retângulo
var x = artboard.artboardRect[0] - 28.3465 / 2; // posiciona o retângulo 1cm à esquerda
var y = artboard.artboardRect[1] + 28.3465 / 2; // posiciona o retângulo 1cm abaixo
var rect = layer.pathItems.rectangle(y, x, width, height);

rect.stroked = false; // habilita a borda
rect.filled = true; // desabilita o preenchimento

// ajusta a artboard no tamanho do retângulo criado
rect.selected = true; // seleciona o retângulo criado
doc.fitArtboardToSelectedArt(0); // ajusta a artboard no tamanho do retângulo criado
