import 'mocha';
import { expect } from 'chai';
import { ILanguageSyntax } from '@/domain/ScriptCode';
import { BatchFileSyntax } from '@/application/Parser/Script/Syntax/BatchFileSyntax';
import { ShellScriptSyntax } from '@/application/Parser/Script/Syntax/ShellScriptSyntax';

function getSystemsUnderTest(): ILanguageSyntax[] {
  return [new BatchFileSyntax(), new ShellScriptSyntax()];
}

describe('ConcreteSyntaxes', () => {
  describe('commentDelimiters', () => {
    for (const sut of getSystemsUnderTest()) {
      it(`${sut.constructor.name} returns defined value`, () => {
        // act
        const value = sut.commentDelimiters;
        // assert
        expect(value);
      });
    }
  });
  describe('commonCodeParts', () => {
    for (const sut of getSystemsUnderTest()) {
      it(`${sut.constructor.name} returns defined value`, () => {
        // act
        const value = sut.commonCodeParts;
        // assert
        expect(value);
      });
    }
  });
});
