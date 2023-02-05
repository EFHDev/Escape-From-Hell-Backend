using Aki.Reflection.Patching;
using EFT;
using EFT.Ballistics;
using Mono.Cecil;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using UnityEngine;
using FieldAttributes = Mono.Cecil.FieldAttributes;

namespace SSH_EFH_Boss_Patch
{
    public static class WildSpawnTypePatch
    {
        public static IEnumerable<string> TargetDLLs { get; } = new[] { "Assembly-CSharp.dll" };

        public static int followerresearcherValue = 0x70000000;
        public static int followerciaValue = 0x70000010;
        public static uint femalepmcspetnazleadValue = 0x70000020;
        public static uint followersavageValue = 0x70000030;
        public static uint spetnazleadValue = 0x70000040;
        public static uint followerspetnazValue = 0x70000050;
        public static uint cwnnorvskValue = 0x70000060;
        public static uint bosstsarValue = 0x70000070;
        public static uint researcherValue = 0x70000080;
        public static uint bossamericanValue = 0x70000090;

        public static void Patch(ref AssemblyDefinition assembly)
        {
            var botEnums = assembly.MainModule.GetType("EFT.WildSpawnType");

            var followerresearcher = new FieldDefinition("followerresearcher", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = followerresearcherValue };
            botEnums.Fields.Add(followerresearcher);

            var followercia = new FieldDefinition("followercia", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = followerciaValue };
            botEnums.Fields.Add(followercia);

            var femalepmcspetnazlead = new FieldDefinition("femalepmcspetnazlead", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = femalepmcspetnazleadValue };
            botEnums.Fields.Add(femalepmcspetnazlead);

            var followersavage = new FieldDefinition("followersavage", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = followersavageValue };
            botEnums.Fields.Add(followersavage);

            var spetnazlead = new FieldDefinition("spetnazlead", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = spetnazleadValue };
            botEnums.Fields.Add(spetnazlead);

            var followerspetnaz = new FieldDefinition("followerspetnaz", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = followerspetnazValue };
            botEnums.Fields.Add(followerspetnaz);

            var cwnnorvsk = new FieldDefinition("cwnnorvsk", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = cwnnorvskValue };
            botEnums.Fields.Add(cwnnorvsk);

            var bosstsar = new FieldDefinition("bosstsar", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = bosstsarValue };
            botEnums.Fields.Add(bosstsar);

            var researcher = new FieldDefinition("researcher", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = researcherValue };
            botEnums.Fields.Add(researcher);

            var bossamerican = new FieldDefinition("bossamerican", FieldAttributes.Public | FieldAttributes.Static | FieldAttributes.Literal | FieldAttributes.HasDefault, botEnums)
            { Constant = bossamericanValue };
            botEnums.Fields.Add(bossamerican);
        }

    }
}
