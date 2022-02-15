/**
 * DB/Effects/EffectTable.js
 *
 * List effects
 * TODO: complete the list, add informations about sound.
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(function( require )
{
    'use strict';

    /// type = STR
    ///
    /// - file:
    ///   STR file name stored in data/texture/effect/(.*).str
    ///
    /// - min:
    ///   minify str file stored in data/texture/effect/(.*).str
    ///   used when /mineffect is enabled
    ///
    /// - rand
    ///   replace the %d in the file name with a rand(val1, val2).
    ///
    /// - wav:
    ///   audio file stored in data/wav/ folder
    ///
    /// - attachedEntity:
    ///   if set to true, the effect will follow the entity attached


    /// type = SPR
    ///
    /// - file:
    ///   Sprite file name stored in data/sprite/AIANA®/(.*).spr
    ///
    /// - wav:
    ///   audio file stored in data/wav/ folder
    ///
    /// - attachedEntity:
    ///   if set to true, the effect will follow the entity attached
    ///
    /// - head
    ///   if set to true, the sprite will be at the character's head
    ///
    /// - stopAtEnd
    ///   do not remove when animation end
    ///
    /// - direction
    ///   if set to true, the sprite will inherit character's direction

    /// type = FUNC
    ///
    /// - func:
    ///   callback to use


    return {

        1: [{    //EF_HIT2    Bash
            //  Loads 2 tga-images, semi-randomly (alternating pattern but random position) aligns 4 instances of each (=8 in total) in a circle around the object and stretches them away.
            //  Important note: It really is just stretching one end further and further out, one end of the images is tied to the object
            alphaMax: 1,
            angle: 0,
            attachedEntity: false,
            delay: 140,
            fadeOut: false,
            file: 'effect/lens2.tga',
            poszEnd: 10,
            poszStart: 3,
            sizeEndX: 1,
            sizeEndY: 200,
            sizeStartX: 15,
            sizeStartY: 10,
            type: '2D',
            wav: 'effect/ef_hit2'
        }, {
            alphaMax: 1,
            angle: 45,
            attachedEntity: false,
            delay: 140,
            fadeOut: false,
            file: 'effect/lens1.tga',
            posxEnd: 3,
            posxStart: 0.5,
            poszEnd: 7,
            poszStart: 2,
            sizeEndX: 1,
            sizeEndY: 200,
            sizeStartX: 15,
            sizeStartY: 10,
            type: '2D'
        }, {
            alphaMax: 1,
            angle: -45,
            attachedEntity: false,
            delay: 140,
            fadeOut: false,
            file: 'effect/lens2.tga',
            posxEnd: -3,
            posxStart: -0.5,
            poszEnd: 7,
            poszStart: 2,
            sizeEndX: 1,
            sizeEndY: 200,
            sizeStartX: 15,
            sizeStartY: 10,
            type: '2D'
        }, {
            alphaMax: 1,
            angle: 90,
            attachedEntity: false,
            delay: 140,
            fadeOut: false,
            file: 'effect/lens1.tga',
            posxEnd: -4.5,
            posxStart: -0.8,
            sizeEndX: 1,
            sizeEndY: 200,
            sizeStartX: 15,
            sizeStartY: 10,
            type: '2D'
        }, {
            alphaMax: 1,
            angle: 90,
            attachedEntity: false,
            delay: 140,
            fadeOut: false,
            file: 'effect/lens2.tga',
            posxEnd: 4.5,
            posxStart: 0.7,
            sizeEndX: 1,
            sizeEndY: 200,
            sizeStartX: 15,
            sizeStartY: 10,
            type: '2D'
        }],


        2: [{    //EF_HIT3    Melee Skill Hit
            //type:  'FUNC',
            wav: 'effect/ef_hit3',
            attachedEntity: true
        }],


        3: [{    //EF_HIT4    Melee Skill Hit
            //type:  'FUNC',
            wav: 'effect/ef_hit4',
            attachedEntity: true
        }],


        4: [{    //EF_HIT5    Melee Skill Hit
            alphaMax: 1,
            angle: 90,
            attachedEntity: false,
            delay: 400,
            fadeOut: false,
            file: 'effect/lens2.tga',
            posz: 1,
            rotate: false,
            sizeEndY: 200,
            sizeStartY: 10,
            sizeX: 15,
            toAngle: 0,
            type: '3D',
            wav: 'effect/ef_hit5'
        }, {
            alphaMax: 1,
            angle: 180,
            attachedEntity: false,
            delay: 400,
            fadeOut: false,
            file: 'effect/lens2.tga',
            posz: 1,
            rotate: false,
            sizeEndY: 200,
            sizeStartY: 10,
            sizeX: 15,
            toAngle: 90,
            type: '3D',
            wav: 'effect/ef_hit5'
        }],


        5: [{    //EF_HIT6    Melee Skill Hit
            alphaMax: 1,
            angle: 90,
            attachedEntity: false,
            delay: 400,
            fadeOut: false,
            file: 'effect/lens2.tga',
            posz: 1,
            rotate: false,
            sizeEndY: 150,
            sizeStartY: 10,
            sizeX: 10,
            toAngle: 0,
            type: '2D',
            wav: 'effect/ef_hit6'
        }, {
            alphaMax: 1,
            angle: 180,
            attachedEntity: false,
            delay: 400,
            fadeOut: false,
            file: 'effect/lens2.tga',
            posz: 1,
            rotate: false,
            sizeEndY: 150,
            sizeStartY: 10,
            sizeX: 10,
            toAngle: 90,
            type: '2D',
            wav: 'effect/ef_hit6'
        }],


        6: [{ //portal - entering the new map    //EF_ENTRY    Being Warped
            //type: 'FUNC',
            //file: 'effect/ring_blue',
            alphaMax: 0.5,
            animation: 5,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.3,
            delay: 1500,
            fade: false,
            green: 0.6,
            height: 35,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 0.3,
            type: 'CYLINDER',
            wav: 'effect/ef_portal'
        }, {
            alphaMax: 0.5,
            animation: 5,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.6,
            delay: 1500,
            fade: false,
            green: 0.6,
            height: 25,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 0.8,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.5,
            animation: 5,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.8,
            delay: 1500,
            fade: false,
            green: 0.6,
            height: 13,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.5,
            animation: 5,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 1,
            delay: 1500,
            fade: false,
            green: 0.6,
            height: 5,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 1.3,
            type: 'CYLINDER'
        }],


        7: [{    //EF_EXIT    Item Heal effect
            //type: 'FUNC',
            //file: 'effect/alpha_down',
            wav: '_heal_effect',
            attachedEntity: true
        }],


        8: [{    //EF_WARP    Yellow Ripple Effect
            //type: 'FUNC',
            //file: 'effect/ring_yellow',
            attachedEntity: false
        }],


        9: [{    //EF_ENHANCE    Different Type of Heal
            //type: 'FUNC',
            //file: 'effect/alpha_down',
            attachedEntity: false
        }],


        10: [{    //EF_COIN    Mammonite
            type: 'STR',
            file: 'maemor',
            min:  'memor_min',
            wav:  'effect/ef_coin2',
            attachedEntity: true
        }],


        11: [{    //EF_ENDURE    Endure
            alphaMax: 1,
            attachedEntity: false,
            delay: 1000,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/endure.tga',
            posz: 2,
            sizeEnd: 70,
            sizeSmooth: false,
            sizeStart: 200,
            type: '3D',
            wav: 'effect/ef_endure',
            zIndex: 10
        }, {
            attachedEntity: true,
            func: function EffectReadyToFight(entity) {
                entity.setAction({
                    'action': entity.ACTION.READYFIGHT,
                    'frame': 0,
                    'repeat': true,
                    'play': false,
                    'next': {
                        'action': entity.ACTION.IDLE,
                        'frame': 0,
                        'repeat': false,
                        'play': false,
                        'next': true
                    }
                });
            },
            type: 'FUNC'
        }],


        12: [{    //EF_BEGINSPELL    Yellow cast aura
            alphaMax: 0.8,
            animation: 2,
            attachedEntity: false,
            blue: 1,
            bottomSize: 1,
            delay: 1000,
            fade: false,
            green: 1,
            height: 4,
            red: 1,
            rotate: false,
            textureName: 'effect/ring_yellow',
            topSize: 5,
            type: 'CYLINDER',
            wav: 'effect/ef_beginspell'
        }],


        13: [{    //EF_GLASSWALL    Blue Box
            type: 'STR',
            file: 'effect/safetywall',
            wav:  'effect/ef_glasswall',
            attachedEntity: false
        }],


        14: [{    //EF_HEALSP    Blue restoring effect
            //type: 'FUNC',
            //file: 'effect/ring_blue',
            wav: '_heal_effect',
            attachedEntity: true
        }],


        15: [{ //soul strike caster    //EF_SOULSTRIKE    Soul Strike
            alphaMax: 1,
            attachedEntity: false,
            blue: 1,
            delay: 500,
            //duplicate: -1,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            fromSrc: false,
            green: 1,
            poszEnd: 1,
            poszSmooth: false,
            poszStartRand: 5,
            poszStartRandMilieu: 6,
            red: 1,
            size: 50,
            timeBetweenDupli: 150,
            type: '3D',
            wav: 'effect/ef_soulstrike',
            zIndex: 1
        }],


        16: [{ //hide and monster body relocation sound    //EF_BASH    Hide
            attachedEntity: false,
            file: 'smoke',
            type: 'SPR',
            wav: 'effect/ef_bash'
        }],

        
        17: [{   // still missing half of sphere with text. 'effect/´ëAo1ß',    //EF_MAGNUMBREAK    Magnum Break
            alphaMax: 0.7,
            animation: 4,
            attachedEntity: false,
            blue: 1,
            bottomSize: 4,
            delay: 300,
            fade: false,
            green: 1,
            height: 1,
            red: 1,
            rotate: true,
            textureName: 'effect/ring_yellow',
            topSize: 6,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.6,
            animation: 4,
            attachedEntity: false,
            blue: 1,
            bottomSize: 4,
            delay: 300,
            fade: true,
            green: 1,
            height: 4,
            red: 1,
            rotate: true,
            textureName: '\xc2\xb4\xc3\xab\xc3\x86\xc3\xb8\xc2\xb9\xc3\x9f', //´ëÆø¹ß
            topSize: 1,
            type: 'CYLINDER',
            wav: 'effect/ef_magnumbreak'
        }],
        

        18: [{    //EF_STEAL    Steal
            alphaMax: 1,
            attachedEntity: false,
            blue: 0.1,
            delay: 500,
            duplicate: 7,
            fadeOut: false,
            file: 'effect/pok1.tga',
            green: 1,
            posxEndRand: 3.5,
            posyEndRand: 3.5,
            poszEndRand: 3,
            poszStart: 1.5,
            red: 1,
            sizeEnd: 10,
            sizeStart: 200,
            type: '3D',
            wav: 'effect/ef_steal',
            zIndex: 10
        }],


        // 19: [{}],    //EF_HIDING    Invalid Effect ID Popup in client


        20: [{    //EF_PATTACK    Envenom/Poison
            alphaMax: 1,
            attachedEntity: true,
            blue: 1,
            delay: 1000,
            duplicate: 10,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok1.tga',
            green: 0.7,
            posxRand: 1,
            posyRand: 1,
            poszEnd: 5,
            poszStart: 0,
            red: 1,
            size: 100,
            sizeRand: 20,
            type: '3D',
            wav: 'effect/ef_detoxication', //wav: 'effect/assasin_enchantpoison',
            zIndex: 1
        }],


        21: [{    //EF_DETOXICATION    Detoxify
            alphaMax: 1,
            attachedEntity: true,
            blue: 1,
            delay: 1000,
            duplicate: 10,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok1.tga',
            green: 1,
            posxRand: 1,
            posyRand: 1,
            poszEnd: 5,
            poszStart: 0,
            red: 0.7,
            size: 100,
            sizeRand: 20,
            type: '3D',
            wav: 'effect/ef_detoxication',
            zIndex: 1
        }],


        22: [{    //EF_SIGHT    Sight
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.9,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 0.4,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.8,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 0.5,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.7,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 0.7,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.6,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 0.8,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.5,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.4,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1.3,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.3,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1.4,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.2,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1.5,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.1,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1.6,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1.7,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.3,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.9,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 0.5,
            spriteName: 'sight',
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.3,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.8,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 0.7,
            spriteName: 'sight',
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.3,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.7,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 0.9,
            spriteName: 'sight',
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.3,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.6,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 1.1,
            spriteName: 'sight',
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.4,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.5,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 1.4,
            spriteName: 'sight',
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.4,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.4,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 1.6,
            spriteName: 'sight',
            type: '3D',
            zIndex: 2
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.3,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 1.8,
            spriteName: 'sight',
            type: '3D',
            zIndex: 3
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.2,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 2,
            spriteName: 'sight',
            type: '3D',
            zIndex: 4
        }, {
            alphaMax: 0.6,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotateLate: 0.1,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 2.2,
            spriteName: 'sight',
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.6,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 10,
            posx: -2,
            posy: 0,
            posz: 4,
            red: 0,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 2.4,
            spriteName: 'sight',
            type: '3D',
            wav: 'effect/ef_sight',
            zIndex: 6
        }],


        23: [{    //EF_STONECURSE    Stone Curse
            type: 'STR',
            file: 'stonecurse',
            attachedEntity: true
        }],


        24: [{ //fireball caster effect (on target effect 49:)    //EF_FIREBALL    Fire Ball
            alphaMax: 1,
            attachedEntity: false,
            blue: 0.8,
            delay: 250,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/fireparticle.tga',
            fromSrc: false,
            green: 0.8,
            posz: 1,
            red: 1,
            size: 50,
            type: '3D',
            wav: 'effect/ef_fireball',
            zIndex: 1
        }],


        25: [{    //EF_FIREWALL    Fire Wall
            type: 'STR',
            file: 'firewall%d',
            wav:  'effect/ef_firewall',
            rand: [1, 2],
            attachedEntity: false
        }],


        26: [{    //EF_ICEARROW    A sound (a swipe?)
            //type: 'FUNC',
            wav: 'effect/ef_icearrow%d', // Or ef_icearrow2 & ef_icearrow3 . Seems to be random
            rand: [1, 3],
            attachedEntity: false
        }],


        27: [{ //Frost diver caster (ice traveling to target)    //EF_FROSTDIVER    Frost Diver (Traveling to Target)
            //type: 'FUNC',
            file: 'effect/ice',
            wav: 'effect/ef_frostdiver1',
            attachedEntity: false
        }],


        28: [{ //Frost Diver target hit    //EF_FROSTDIVER2    Frost Diver (Hitting)
            attachedEntity: true,
            file: 'freeze',
            type: 'STR',
            wav: 'effect/ef_frostdiver2'
        }],


        29: [{    //EF_LIGHTBOLT    Lightning Bolt
            attachedEntity: false,
            duplicate: 1,
            file: 'lightning',
            type: 'STR'
        }, {
            attachedEntity: false,
            //duplicate: -1,
            file: 'windhit%d',
            rand: [1, 3],
            type: 'STR'
        }],


        30: [{    //EF_THUNDERSTORM    Thunder Storm
            type: 'STR',
            file: 'thunderstorm',
            wav:  'effect/magician_thunderstorm',
            attachedEntity: false
        }],


        31: [{    //EF_FIREARROW    Weird bubbles launching from feet
            //type: 'FUNC',
            wav: 'effect/ef_firearrow1',
            attachedEntity: true
        }],


        32: [{    //EF_NAPALMBEAT    Small clustered explosions
            //type: 'FUNC',
            //file: 'effect/Ao1ß1', // Uses up to Ao1ß8 , so eight files for an animated explosion
            wav: 'effect/ef_napalmbeat',
            attachedEntity: true
        }],

        33: [{ //EF_RUWACH    //ruwach
			alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.7,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 0.3,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.6,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 0.4,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.5,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 0.6,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.4,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 0.8,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.3,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.2,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1.3,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotateLate: 0.1,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1.5,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 1,
            blue: 0.5,
            delay: 12200,
            green: 0.5,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 0,
            red: 0.5,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            shadowTexture: false,
            size: 1.7,
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.3,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 2,
            red: 0,
            rotateLate: 0.7,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 0.8,
            spriteName: 'particle2',
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.4,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 2,
            red: 0,
            rotateLate: 0.6,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 0.9,
            spriteName: 'particle2',
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.5,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 2,
            red: 0,
            rotateLate: 0.5,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 1,
            spriteName: 'particle2',
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.8,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 2,
            red: 0,
            rotateLate: 0.4,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 1.4,
            spriteName: 'particle2',
            type: '3D',
            zIndex: 2
        }, {
            alphaMax: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 2,
            red: 0,
            rotateLate: 0.3,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 1.6,
            spriteName: 'particle2',
            type: '3D',
            zIndex: 3
        }, {
            alphaMax: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 2,
            red: 0,
            rotateLate: 0.2,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 1.9,
            spriteName: 'particle2',
            type: '3D',
            zIndex: 4
        }, {
            alphaMax: 0.8,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 2,
            red: 0,
            rotateLate: 0.1,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 2.2,
            spriteName: 'particle2',
            type: '3D',
            zIndex: 5
        }, {
            alphaMax: 0.8,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 12200,
            green: 1,
            nbOfRotation: 8,
            posx: -2,
            posy: 0,
            posz: 2,
            red: 0,
            rotatePosX: 3,
            rotatePosY: 3,
            rotationClockwise: false,
            size: 3.3,
            spriteName: 'particle2',
            type: '3D',
            wav: 'effect/ef_ruwach',
            zIndex: 6
        }],
		
        34: [{    //EF_TELEPORTATION    Old Map Exit Animation (unused)
            //type: 'FUNC',
            //file: 'effect/ring_blue',
            wav: 'effect/ef_teleportation',
            attachedEntity: false
        }],


        35: [{ //warp portal casting before unit appear    //EF_READYPORTAL    Old Warp Portal (unused)
            alphaMax: 0.6,
            animation: 0,
            attachedEntity: true,
            blue: 1,
            bottomSize: 0.6,
            delay: 25000,
            fade: true,
            green: 0.7,
            height: 15,
            red: 0.7,
            rotate: false,
            textureName: 'alpha_down',
            topSize: 0.6,
            type: 'CYLINDER',
            wav: 'effect/ef_readyportal'
        }],

        //36: [{}],    //EF_PORTAL    //warp portal unit

        37: [{    //EF_INCAGILITY    AGI Up
            alphaMax: 1,
            attachedEntity: false,
            delay: 1000,
            delayLate: 500,
            duplicate: 7,
            fadeOut: false,
            file: 'effect/ac_center2.tga',
            posxRand: 1.5,
            posyRand: 1,
            poszEndRand: 1,
            poszEndRandMilieu: 6,
            poszStartRand: 1,
            poszStartRandMilieu: 1,
            sizeRandY: 15,
            sizeRandYmilieu: 45,
            sizeX: 2.5,
            type: '3D',
            zIndex: 0
        }, {
            alphaMax: 0.75,
            attachedEntity: false,
            delay: 1000,
            delayOffset: 400,
            duplicate: 3,
            fadeOut: false,
            file: 'effect/ac_center2.tga',
            posxRand: 1.5,
            posyRand: 1,
            poszEndRand: 1,
            poszEndRandMilieu: 6,
            poszStartRand: 1,
            poszStartRandMilieu: 1,
            sizeRandY: 15,
            sizeRandYmilieu: 45,
            sizeX: 2.5,
            type: '3D',
            zIndex: 0
        }, {
            alphaMax: 1,
            attachedEntity: false,
            delay: 1000,
            duplicate: 10,
            fadeOut: false,
            file: 'effect/ac_center2.tga',
            posxRand: 1.5,
            posyRand: 1,
            poszEndRand: 1,
            poszEndRandMilieu: 6,
            poszStartRand: 1,
            poszStartRandMilieu: 1,
            sizeRandY: 15,
            sizeRandYmilieu: 45,
            sizeX: 2.5,
            type: '3D',
            zIndex: 0
        }, {
            alphaMax: 1,
            attachedEntity: false,
            delay: 1000,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/agi_up.bmp',
            poszEnd: 3,
            poszStart: 0.4,
            sizeEnd: 100,
            sizeSmooth: false,
            sizeStart: 100,
            sizeY: 45,
            type: '3D',
            wav: 'effect/ef_incagility',
            zIndex: 10
        }],


        38: [{    //EF_DECAGILITY    AGI Down
            alphaMax: 1,
            attachedEntity: false,
            delay: 1000,
            duplicate: 20,
            fadeOut: false,
            file: 'effect/ac_center2.tga',
            posxRand: 1.5,
            posyRand: 1,
            poszEndRand: 1,
            poszEndRandMilieu: 1,
            poszStartRand: 1,
            poszStartRandMilieu: 6,
            sizeRandY: 15,
            sizeRandYmilieu: 45,
            sizeX: 2.5,
            type: '3D',
            zIndex: 0
        }, {
            alphaMax: 1,
            attachedEntity: false,
            delay: 1000,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/slow.bmp',
            poszEnd: 0.4,
            poszStart: 2.8,
            sizeEnd: 100,
            sizeSmooth: false,
            sizeStart: 100,
            sizeY: 45,
            type: '3D',
            wav: 'effect/ef_decagility',
            zIndex: 10
        }],


        39: [{    //EF_AQUA    Aqua Benedicta
            type: 'SPR',
            file: '\xbc\xba\xbc\xf6\xb6\xdf\xb1\xe2',
            wav:  'effect/ef_aqua',
            head:  true,
            attachedEntity: true
        }],


        40: [{    //EF_SIGNUM    Signum Crucis
            type: 'STR',
            file: 'cross',
            wav:  'effect/ef_signum',
            attachedEntity: true
        }],


        41: [{    //EF_ANGELUS    Angelus
            type: 'STR',
            file: 'angelus',
            wav:  'effect/ef_angelus',
            min:  'jong_mini',
            head:  true,
            attachedEntity: true
        }],


        42: [{    //EF_BLESSING    Blessing
            attachedEntity: true,
            delayFrame: 30,
            duplicate: 4,
            file: '\xc3\xe0\xba\xb9',
            frame: 0,
            repeat: 0, //4
            time_between_dupli: 100,
            type: 'SPR',
			head: true,
            yOffset: -120
        }, {
            alphaMax: 1,
            attachedEntity: true,
            delay: 1200,
            delayOffset: 300,
            duplicate: 6,
            fadeIn: false,
            fadeOut: false,
            posxRand: 1.2,
            posyRand: 1,
            poszEndRand: 0.5,
            poszEndRandMilieu: 1,
            poszStartRand: 2,
            poszStartRandMilieu: 5.5,
            size: 0.5,
            sparkling: false,
            sparkNumber: 2,
            spriteName: 'particle6',
            timeBetweenDupli: 0,
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 1,
            attachedEntity: true,
            delay: 1200,
            delayOffset: 400,
            duplicate: 6,
            fadeIn: false,
            fadeOut: false,
            posxRand: 1.4,
            posyRand: 1.1,
            poszEndRand: 0.5,
            poszEndRandMilieu: 1,
            poszStartRand: 2,
            poszStartRandMilieu: 5.5,
            size: 0.5,
            spriteName: 'particle6',
            timeBetweenDupli: 0,
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.3,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            delay: 2500,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok2.tga',
            green: 0.75,
            posx: 0,
            posy: 0,
            posz: 0,
            red: 0.1,
            size: 140,
            type: '3D',
            wav: 'effect/ef_blessing',
            zIndex: 10
        }],


        43: [{    //EF_INCAGIDEX    Dex + Agi Up
            alphaMax: 1,
            attachedEntity: false,
            delay: 1000,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/dex_agi_up.bmp',
            poszEnd: 3,
            poszStart: 0.4,
            sizeEnd: 100,
            sizeSmooth: false,
            sizeStart: 100,
            sizeY: 45,
            type: '3D',
            wav: 'effect/ef_incagidex',
            zIndex: 10
        }],


        45: [{ // This one is almost invisible, but there are some small white thingies flying around    //EF_FIREFLY    Faint Little Ball Things.
            type: 'FUNC',
            //file: 'sprite/AIANA®/particle1',
            attachedEntity: true
        }],


        47: [{    //EF_TORCH    Torch
            type: 'SPR',
            file: 'torch_01',
            attachedEntity: false,
            repeat: true
        }],


        49: [{    //EF_FIREHIT    Firebolt/Wall Hits
            type: 'STR',
            file: 'firehit%d',
            wav:  'effect/ef_firehit',
            rand: [1, 3],
            attachedEntity: true
        }],

        51: [{ // water hit    //EF_COLDHIT    Ice Elemental Hit
            wav:  '_hit_fist%d',
            rand: [3, 4],
            attachedEntity: true
        }],  

        52: [{    //EF_WINDHIT    Wind Elemental Hit
            type: 'STR',
            file: 'windhit%d',
            wav:  '_hit_fist%d',
            rand: [1, 3],
            attachedEntity: true
        }],


        53: [{    //EF_POISONHIT    Puff of Purpulish Smoke?
            type: 'SPR',
            file: 'poisonhit',
            wav:  'effect/ef_poisonattack',
            attachedEntity: false
        }],


        54: [{    //EF_BEGINSPELL2    Cast Initiation Aura (Water Element)
            alphaMax: 0.2,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.5,
            height: 30,
            red: 0.5,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.2,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.5,
            height: 1,
            red: 0.5,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 1.3,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.6,
            animation: 2,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.5,
            height: 3,
            red: 0.5,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 4,
            type: 'CYLINDER',
            wav: 'effect/ef_beginspell'
        }],


        55: [{    //EF_BEGINSPELL3    Cast Initiation Aura (Fire Element)
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.4,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.4,
            height: 30,
            red: 1,
            rotate: false,
            textureName: 'ring_red',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.7,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.4,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.4,
            height: 2,
            red: 1,
            rotate: false,
            textureName: 'ring_red',
            topSize: 1.3,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.7,
            animation: 2,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.4,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.4,
            height: 3,
            red: 1,
            rotate: false,
            textureName: 'ring_red',
            topSize: 4,
            type: 'CYLINDER',
            wav: 'effect/ef_beginspell'
        }],


        56: [{    //EF_BEGINSPELL4    Cast Initiation Aura (Wind Element)
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.6,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 1,
            height: 30,
            red: 0.6,
            rotate: false,
            textureName: 'ring_white',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.6,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.6,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 1,
            height: 2,
            red: 0.6,
            rotate: false,
            textureName: 'ring_white',
            topSize: 1.3,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.6,
            animation: 2,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.6,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 1,
            height: 3,
            red: 0.6,
            rotate: false,
            textureName: 'ring_white',
            topSize: 4,
            type: 'CYLINDER',
            wav: 'effect/ef_beginspell'
        }],


        57: [{    //EF_BEGINSPELL5    Cast Initiation Aura (Earth Element)
            alphaMax: 0.5,
            animation: 1,
            attachedEntity: false,
            blendMode: 0,
            blue: 1,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 1,
            height: 30,
            red: 1,
            rotate: false,
            textureName: 'ring_yellow',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 1,
            animation: 1,
            attachedEntity: false,
            blendMode: 0,
            blue: 1,
            bottomSize: 1.1,
            delay: 900,
            fade: false,
            green: 1,
            height: 3,
            red: 1,
            rotate: false,
            textureName: 'effect/ring_yellow',
            topSize: 1.2,
            type: 'CYLINDER'
        }, {
            alphaMax: 1,
            animation: 2,
            attachedEntity: false,
            blendMode: 0,
            blue: 1,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 1,
            height: 3,
            red: 1,
            rotate: false,
            textureName: 'ring_yellow',
            topSize: 4,
            type: 'CYLINDER',
            wav: 'effect/ef_beginspell'
        }],


        58: [{    //EF_BEGINSPELL6    Cast Initiation Aura (Holy Element)
            alphaMax: 0.8,
            animation: 2,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 1,
            height: 4,
            red: 1,
            rotate: false,
            textureName: 'ring_white',
            topSize: 5,
            type: 'CYLINDER',
            wav: 'effect/ef_beginspell'
        }],


        59: [{    //EF_BEGINSPELL7    Cast Initiation Aura (Poison Element)
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.8,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.8,
            height: 30,
            red: 0.8,
            rotate: false,
            textureName: 'ring_purple',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.7,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.8,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.8,
            height: 3,
            red: 0.8,
            rotate: false,
            textureName: 'ring_purple',
            topSize: 1.3,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.7,
            animation: 2,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.8,
            bottomSize: 1,
            delay: 900,
            fade: false,
            green: 0.8,
            height: 3,
            red: 0.8,
            rotate: false,
            textureName: 'ring_purple',
            topSize: 4,
            type: 'CYLINDER',
            wav: 'effect/ef_beginspell'
        }],


        60: [{    //EF_LOCKON    Cast target circle
            type: 'FUNC',
            attachedEntity: true,
            func: function(entity, tick) {
                var LockOnTarget = require('Renderer/Effects/LockOnTarget');

                this.add(new LockOnTarget(
                    entity,
                    tick,
                    tick + 10000
                ), entity.GID);
            },
        }],


        62: [{    //EF_SIGHTRASHER    Sight Trasher
            //type: 'FUNC',
            //file: 'sprite/AIANA®/sight',
            wav:  'effect/wizard_sightrasher',
            attachedEntity: false
        }],


        64: [{    //EF_ARROWSHOT    Something Like Puruple/Yellow Light Bullet
            type: 'STR',
            file: 'arrowshot',
            attachedEntity: true
        }],


        65: [{    //EF_INVENOM    Something Like Absorb of Power
            type: 'STR',
            file: 'invenom',
            wav:  'effect/thief_invenom',
            attachedEntity: true
        }],


        66: [{    //EF_CURE    Cure
            type: 'STR',
            file: 'cure',
            wav:  'effect/acolyte_cure',
            min:  'cure_min',
            attachedEntity: true
        }],


        67: [{    //EF_PROVOKE    Provoke
            type: 'STR',
            file: 'provoke',
            wav:  'effect/swordman_provoke',
            attachedEntity: true
        }],


        68: [{    //EF_MVP    MVP Banner
            type: 'STR',
            file: 'mvp',
            wav:  'effect/st_mvp',
            attachedEntity: true
        }],


        69: [{    //EF_SKIDTRAP    Skid Trap
            type: 'STR',
            file: 'skidtrap',
            wav:  'effect/hunter_skidtrap', // or hallucinationwalk ?
            attachedEntity: false
        }],


        70: [{    //EF_BRANDISHSPEAR    Brandish Spear
            attachedEntity: false,
            file: 'brandish',
            type: 'STR',
            wav: 'effect/knight_brandish_spear'
        }],


        74: [{    //EF_ICEWALL    Ice Wall
            //type: 'FUNC',
            wav:  'effect/wizard_icewall',
            attachedEntity: false
        }],


        75: [{    //EF_GLORIA    Gloria
            type: 'STR',
            file: 'gloria',
            wav:  'effect/priest_gloria',
            min:  'gloria_min',
            attachedEntity: true
        }],


        76: [{    //EF_MAGNIFICAT    Magnificat
            type: 'STR',
            file: 'magnificat',
            wav:  'effect/priest_magnificat',
            min:  'magnificat_min',
            attachedEntity: true
        }],


        77: [{    //EF_RESURRECTION    Resurrection
            type: 'STR',
            file: 'resurrection',
            wav:  'effect/priest_resurrection',
            min:  'resurrection_min',
            attachedEntity: true
        }],


        78: [{    //EF_RECOVERY    Status Recovery
            type: 'STR',
            file: 'recovery',
            wav:  'effect/priest_recovery',
            attachedEntity: true
        }],


        79: [{    //EF_EARTHSPIKE    Earth Spike
            //type: 'FUNC',
            wav:  'effect/wizard_earthspike',
            attachedEntity: false
        }],

        80: [{ //spear boomerang hit on target    //EF_SPEARBMR    Spear Boomerang
            //type: 'FUNC',
            wav:  'effect/ef_fireball',                  
            attachedEntity: true
        }],

        81: [{ // default skill sound?    //EF_PIERCE    Skill hit
            wav:  'effect/ef_bash',
            attachedEntity: true
        }],

        82: [{ //turn undead caster    //EF_TURNUNDEAD    Turn Undead
            //type: 'FUNC',
            wav:  'effect/ef_bash',
            attachedEntity: true
        }],

        83: [{    //EF_SANCTUARY    Sanctuary
            type: 'STR',
            file: 'sanctuary',
            wav:  'effect/priest_sanctuary',
            attachedEntity: false
        }],


        84: [{    //EF_IMPOSITIO    Impositio Manus
            type: 'STR',
            file: 'impositio',
            wav:  'effect/priest_impositio',
            attachedEntity: true
        }],


        85: [{    //EF_LEXAETERNA    Lex Aeterna
            type: 'STR',
            file: 'lexaeterna',
            wav:  'effect/priest_lexaeterna',
            min:  'lexaeterna_min',
            attachedEntity: true
        }],


        86: [{    //EF_ASPERSIO    Aspersio
            type: 'STR',
            file: 'aspersio',
            wav:  'effect/priest_aspersio',
            attachedEntity: true
        }],


        87: [{    //EF_LEXDIVINA    Lex Divina
            type: 'STR',
            file: 'lexdivina',
            wav:  'effect/priest_lexdivina',
            attachedEntity: true
        }],


        88: [{    //EF_SUFFRAGIUM    Suffragium
            type: 'STR',
            file: 'suffragium',
            wav:  'effect/priest_suffragium',
            min:  'suffragium_min',
            attachedEntity: true
        }],


        89: [{    //EF_STORMGUST    Storm Gust
            type: 'STR',
            file: 'stormgust',
            wav:  'effect/wizard_stormgust',
            min:  'storm_min',
            attachedEntity: true
        }],


        90: [{    //EF_LORD    Lord of Vermilion
            type: 'STR',
            file: 'lord',
            wav:  'effect/wizard_fire_ivy',
            attachedEntity: false
        }],


        91: [{    //EF_BENEDICTIO    B. S. Sacramenti
            type: 'STR',
            file: 'benedictio',
            wav:  'effect/priest_benedictio',
            attachedEntity: true
        }],


        92: [{    //EF_METEORSTORM    Meteor Storm
            type: 'STR',
            file: 'meteor%d',
            wav:  'effect/wizard_meteor',
            rand: [1, 4],
            attachedEntity: false
        }],


        93: [{    //EF_YUFITEL    Jupitel Thunder (Ball)
            type: 'STR',
            //file: 'ufidel',
            //file: 'thunder_ball000%d',
            wav:  'effect/hunter_shockwavetrap',
            //rand: [1, 6],
            attachedEntity: true
        }],


        94: [{    //EF_YUFITELHIT    Jupitel Thunder (Hit)
            type: 'STR',
            file: 'ufidel_pang',
            attachedEntity: true
        }],


        95: [{    //EF_QUAGMIRE    Quagmire
            type: 'STR',
            file: 'quagmire',
            wav:  'effect/wizard_quagmire',
            attachedEntity: false
        }],


        96: [{ //firepillar caster    //EF_FIREPILLAR    Fire Pillar
            type: 'STR',
            file: 'firepillar',
            wav:  'effect/wizard_fire_pillar_a',
            attachedEntity: false
        }],


        97: [{ //firepillar target hit    //EF_FIREPILLARBOMB    Fire Pillar/Land Mine hit
            type: 'STR',
            file: 'firepillarbomb',
            wav:  'effect/wizard_fire_pillar_b',
            attachedEntity: false
        }],


        98: [{    //EF_HASTEUP    Adrenaline Rush
            //type: 'FUNC',
            // This one is pretty messy... it somehow consists of two sprites, one is attached to the Entity, one isnt. additionally it consists of two sounds
            // For the sake of simplicity, I propose just using one sprite and one sound - the _a sound is just some 'intro' while _b is a real effect
            // black_adrenalinerush.wav what is this for?
            wav:  'effect/black_adrenalinerush_b',  // The original client plays _a first and then continues with b
            attachedEntity: true
        }],

        '98_beforecast': [{
            wav:  'effect/black_adrenalinerush_a',
            attachedEntity: true
        }],
        

        99: [{    //EF_FLASHER    Flasher Trap
            //type: 'FUNC',
            // Again two sprites... one attached one not. But here the 'main' sprite is ment to stay a little longer
            wav:  'effect/hunter_flasher',
            attachedEntity: false
        }],


        100: [{    //EF_REMOVETRAP    Yellow ball fountain
            //type: 'FUNC',
            wav:  'effect/hunter_removetrap',
            attachedEntity: false
        }],

        101: [{    //EF_REPAIRWEAPON    Weapon Repair
            type: 'STR',
            file: 'repairweapon',
            wav:  'effect/black_weapon_repear',
            attachedEntity: true
        }],


        102: [{    //EF_CRASHEARTH    Hammerfall
            type: 'STR',
            file: 'crashearth',
            wav:  'effect/black_hammerfall',
            attachedEntity: false
        }],


        103: [{    //EF_PERFECTION    Weapon Perfection
            type: 'STR',
            file: 'weaponperfection',
            wav:  'effect/black_weapon_perfection',
            min:  'weaponperfection_min',
            attachedEntity: true
        }],


        104: [{    //EF_MAXPOWER    Maximize Power
            type: 'STR',
            file: 'maximizepower',
            min:  'maximize_min',
            attachedEntity: true
        }],

        //105: [{}],    //EF_BLASTMINE    empty

        106: [{    //EF_BLASTMINEBOMB    Blast Mine Trap
            type: 'STR',
            file: 'blastmine',
            wav:  'effect/hunter_blastmine', //hun_blastmine
            attachedEntity: false
        }],


        107: [{    //EF_CLAYMORE    Claymore Trap
            type: 'STR',
            file: 'claymore',
            wav:  'effect/hunter_claymoretrap',
            attachedEntity: false
        }],


        108: [{    //EF_FREEZING    Freezing Trap
            type: 'STR',
            file: 'freezing',
            wav:  'effect/hunter_freezingtrap',
            attachedEntity: false
        }],


        109: [{    //EF_BUBBLE    Bailaban Blue bubble Map Effect
            type: 'STR',
            file: 'bubble%d',
            rand: [1, 4],
            attachedEntity: false
        }],


        110: [{    //EF_GASPUSH    Trap Used by Giearth
            type: 'STR',
            file: 'gaspush',
            wav:  'effect/se_gas_pushhh',
            attachedEntity: false
        }],


        111: [{    //EF_SPRINGTRAP    Spring Trap
            type: 'STR',
            file: 'spring',
            wav:  'effect/hunter_springtrap',
            attachedEntity: false
        }],


        112: [{ //kyrie caster    //EF_KYRIE    Kyrie Eleison
            type: 'STR',
            file: 'kyrie',
            wav:  'effect/priest_kyrie_eleison_a', //on target its priest_kyrie_eleison_b
            min:  'kyrie_min',
            attachedEntity: true
        }],



        113: [{    //EF_MAGNUS    Magnus Exorcismus
            type: 'STR',
            file: 'magnus',
            wav:  'effect/priest_magnus',
            attachedEntity: false
        }],

        115: [{ //blitzbeat on target hit    //EF_BLITZBEAT    Blitz Beat
            wav:  'effect/hunter_blitzbeat',
            attachedEntity: true
        }],
        
        //116: [{}],    //EF_WATERBALL       Fling Watersphere
        //117: [{}],    //EF_WATERBALL2    waterball  (caster or hit?)
        
        119: [{    //EF_DETECTING    Detect
            wav:  'effect/hunter_detecting',
            attachedEntity: true
        }],
        
        120: [{    //EF_CLOAKING       Cloaking
			wav:  'effect/assasin_cloaking'
		}],
		
        121: [{    //EF_SONICBLOW    // sonic blow caste
			type: 'STR',
            file: 'sonicblow',
			wav:  'effect/ef_stonecurse',
            attachedEntity: true
		}],
		
        122: [{    //EF_SONICBLOWHIT       Multi hit effect
			wav:  'effect/assasin_sonicblow'
		}],

        123: [{ //grimtooth caster    //EF_GRIMTOOTH    Grimtooth Cast
            wav:  'effect/ef_frostdiver',
            attachedEntity: true
        }],

        124: [{    //EF_VENOMDUST    Venom Dust
            type: 'STR',
            file: 'venomdust',
            wav:  'effect/assasin_venomdust',
            attachedEntity: false
        }],


        126: [{    //EF_POISONREACT    Poison React
            type: 'STR',
            file: 'poisonreact_1st',
            wav:  'effect/assasin_poisonreact',
            attachedEntity: true
        }],


        127: [{    //EF_POISONREACT2    Small Posion React
            type: 'STR',
            file: 'poisonreact',
            wav:  'effect/assasin_poisonreact',
            attachedEntity: true
        }],

        128: [{    //EF_OVERTHRUST    Over Thrust
            wav:  'effect/black_overthrust',
            attachedEntity: true
        }],

        129: [{    //EF_SPLASHER    Venom Splasher Explosion
            type: 'STR',
            file: 'venomsplasher',
            wav:  'effect/assasin_venomsplasher',
            attachedEntity: true
        }],


        130: [{    //EF_TWOHANDQUICKEN    Two-Hand Quicken
            type: 'STR',
            file: 'twohand',
            wav:  'effect/knight_twohandquicken',
            head: true,
            attachedEntity: true
        }],


        131: [{ //autocounter activate hit    //EF_AUTOCOUNTER    Auto-Counter Hit
            type: 'STR',
            file: 'autocounter',
            wav:  'effect/knight_autocounter',
            attachedEntity: true
        }],
        
        //132: [{}],    //EF_GRIMTOOTHATK       Grimtooth Hit

        133: [{    //EF_FREEZE    Ice Effect (Used by NPCs)
            type: 'STR',
            file: 'freeze',
            attachedEntity: true
        }],


        134: [{    //EF_FREEZED    Ice Effect (Used by NPCs)
            type: 'STR',
            file: 'freezed',
            attachedEntity: true
        }],


        135: [{    //EF_ICECRASH    Ice Effect (Used by NPCs)
            type: 'STR',
            file: 'icecrash',
            attachedEntity: true
        }],


        136: [{    //EF_SLOWPOISON    Slow Poison
            type: 'STR',
            file: 'slowp',
            wav:  'effect/priest_slowpoison',
            attachedEntity: false
        }],

        138: [{    //EF_FIREPILLARON    Fire pillar
            type: 'CYLINDER',
			attachedEntity: false,
			topSize: 1.0,
			bottomSize: 0.5,
			textureName: 'magic_red',
			height: 7,
			delay: 30000,
			delayLate: 1000,
			rotate: true
		}, {
			type: 'CYLINDER',
			attachedEntity: false,
			topSize: 1.5,
			bottomSize: 0.7,
			textureName: 'magic_red',
			height: 5,
			delay: 30000,
			delayLate: 1000,
			rotate: true
		}, {
			type: 'CYLINDER',
			attachedEntity: false,
			topSize: 2.0,
			bottomSize: 1.0,
			textureName: 'magic_red',
			height: 3,
			delay: 30000,
			delayLate: 1000,
			rotate: true
		}],

        139: [{    //EF_SANDMAN    Sandman Trap
            type: 'STR',
            file: 'sandman',
            wav:  'effect/hunter_sandman',
            attachedEntity: false
        }],

        140: [{    //EF_REVIVE    Ressurection Aura
            wav:  'effect/priest_resurrection',
            attachedEntity: true
        }],

        141: [{    //EF_PNEUMA    Pneuma
            type: 'STR',
            file: 'pneuma%d',
            rand: [1, 3],
            attachedEntity: false
        }],

        //142    Heaven's Drive

        143: [{ //sonicblow at target    //EF_SONICBLOW2    Sonic Blow (Part 2/2)
            
        }],


        144: [{    //EF_BRANDISH2    Brandish Spear Pre-Hit Effect
            type: 'STR',
            file: 'brandish2',
            wav:  'effect/knight_brandish_spear',
            attachedEntity: true
        }],


        145: [{    //EF_SHOCKWAVE    Shockwave Trap
            type: 'STR',
            file: 'shockwave',
            wav:  'effect/hunter_shockwavetrap',
            attachedEntity: true
        }],


        146: [{    //EF_SHOCKWAVEHIT    Shockwave Trap Hit
            type: 'STR',
            file: 'shockwavehit',
            attachedEntity: true
        }],


        147: [{    //EF_EARTHHIT    Pierce Hit
            type: 'STR',
            file: 'earthhit',
            attachedEntity: true
        }],


        148: [{    //EF_PIERCESELF    Pierce Cast Animation
            type: 'STR',
            file: 'pierce',
            attachedEntity: true
            // attach animation at middle of body
        }],


        149: [{    //EF_BOWLINGSELF    Bowling Bash
            type: 'STR',
            file: 'bowling',
            wav: '_enemy_hit_normal1',  //'effect/knight_bowling_bash', fake
            head: true,
            attachedEntity: true
        }],


        150: [{    //EF_SPEARSTABSELF    Pierce Cast Animation
            type: 'STR',
            file: 'spearstab',
            wav: '_enemy_hit_normal1',
            attachedEntity: true
            // attach animation at middle of body
        }],


        151: [{ //spear boomerang caster    //EF_SPEARBMRSELF    Spear Boomerang Cast
            type: 'STR',
            file: 'spearboomerang',
            wav:  'effect/knight_spear_boomerang',
            head: true,
            attachedEntity: true
        }],


        152: [{ //turn undead hit on targer    //EF_HOLYHIT    Turn Undead
            type: 'STR',
            file: 'holyhit',
            attachedEntity: true
        }],


        153: [{    //EF_CONCENTRATION    Increase Concentration
            type: 'STR',
            file: 'concentration',
            wav:  'effect/ac_concentration',
            attachedEntity: true
        }],


        154: [{    //EF_REFINEOK    Refine Success
            type: 'STR',
            file: 'bs_refinesuccess',
            wav:  'effect/bs_refinesuccess',
            attachedEntity: true
        }],


        155: [{    //EF_REFINEFAIL    Refine Fail
            type: 'STR',
            file: 'bs_refinefailed',
            wav:  'effect/bs_refinefailed',
            attachedEntity: true
        }],

        //156: [{}],    //EF_JOBCHANGE       jobchange.str not found error
        //157: [{}],    //EF_LVUP       levelup.str not found error

        158: [{    //EF_JOBLVUP    Job Level Up
            type: 'STR',
            file: 'joblvup',
            attachedEntity: true
        }],
        
        //159: [{}],    //EF_TOPRANK       PvP circle
        //160: [{}],    //EF_PARTY       PvP Party Circle
        //161: [{}],    //EF_RAIN       (Nothing)
        //162: [{}],    //EF_SNOW       Snow
        //163: [{}],    //EF_SAKURA       White Sakura Leaves
        //164: [{}],    //EF_STATUS_STATE       (Nothing)

        165: [{ //Comodo Fireworks Ball    //EF_BANJJAKII    Comodo Fireworks Ball
            wav:  'effect/\xc6\xf8\xc1\xd7', //ĆřÁ×
            attachedEntity: false
        }],
        
        //166: [{}],    //EF_MAKEBLUR       Energy Coat (Visual Effect)
        //167: [{}],    //EF_TAMINGSUCCESS       (Nothing)
        //168: [{}],    //EF_TAMINGFAILED       (Nothing)
        
        169: [{    //EF_ENERGYCOAT    Energy Coat Animation
            type: 'STR',
            file: 'energycoat',
            attachedEntity: true
        }],


        170: [{    //EF_CARTREVOLUTION    Cart Revolution
            type: 'STR',
            file: 'cartrevolution',
            attachedEntity: true
        }],

        //171: [{}],    //EF_VENOMDUST2       Venom Dust Map Unit
        //172: [{}],    //EF_CHANGEDARK       Change Element (Dark)
        //173: [{}],    //EF_CHANGEFIRE       Change Element (Fire)
        //174: [{}],    //EF_CHANGECOLD       Change Element (Water)
        //175: [{}],    //EF_CHANGEWIND       Change Element (Wind)
        //176: [{}],    //EF_CHANGEFLAME       Change Element (Fire)
        //177: [{}],    //EF_CHANGEEARTH       Change Element (Earth)
        //178: [{}],    //EF_CHAINGEHOLY       Change Element (Holy)
        //179: [{}],    //EF_CHANGEPOISON       Change Element (Poison)

        181: [{    //EF_MENTALBREAK    Mental Breaker
            type: 'STR',
            file: 'mentalbreak',
            attachedEntity: true
        }],


        182: [{    //EF_MAGICALATTHIT    Magical Hit
            type: 'STR',
            file: 'magical',
            attachedEntity: true
        }],


        183: [{    //EF_SUI_EXPLOSION    Self Destruction
            type: 'STR',
            file: 'sui_explosion',
            attachedEntity: true
        }],


        185: [{    //EF_SUICIDE    (Nothing)
            type: 'STR',
            file: 'suicide',
            attachedEntity: true
        }],


        186: [{    //EF_COMBOATTACK1    Combo Attack 1
            type: 'STR',
            file: 'yunta_1',
            attachedEntity: true
        }],


        187: [{    //EF_COMBOATTACK2    Combo Attack 2
            type: 'STR',
            file: 'yunta_2',
            attachedEntity: true
        }],


        188: [{    //EF_COMBOATTACK3    Combo Attack 3
            type: 'STR',
            file: 'yunta_3',
            attachedEntity: true
        }],


        189: [{    //EF_COMBOATTACK4    Combo Attack 4
            type: 'STR',
            file: 'yunta_4',
            attachedEntity: true
        }],


        190: [{    //EF_COMBOATTACK5    Combo Attack 5
            type: 'STR',
            file: 'yunta_5',
            attachedEntity: true
        }],


        191: [{    //EF_GUIDEDATTACK    Guided Attack
            type: 'STR',
            file: 'homing',
            attachedEntity: true
        }],


        192: [{    //EF_POISONATTACK    Poison Attack
            type: 'STR',
            file: 'poison',
            attachedEntity: true
        }],


        193: [{    //EF_SILENCEATTACK    Silence Attack
            type: 'STR',
            file: 'silence',
            attachedEntity: true
        }],


        194: [{    //EF_STUNATTACK    Stun Attack
            type: 'STR',
            file: 'stun',
            attachedEntity: true
        }],


        195: [{    //EF_PETRIFYATTACK    Petrify Attack
            type: 'STR',
            file: 'stonecurse',
            attachedEntity: true
        }],

        //196: [{}],    //EF_CURSEATTACK       Curse Attack

        197: [{    //EF_SLEEPATTACK    Sleep Attack
            type: 'STR',
            file: 'sleep',
            attachedEntity: true
        }],

        //198: [{}],    //EF_TELEKHIT       (Nothing)

        199: [{    //EF_PONG    Small Popping Bubble Map Effect
            type: 'STR',
            file: 'pong%d',
            rand: [1, 3],
            attachedEntity: false
        }],

        //200: [{}],    //EF_LEVEL99       Normal level 99 Aura (Middle)
        //201: [{}],    //EF_LEVEL99_2       Normal level 99 Aura (Bottom)
        //202: [{}],    //EF_LEVEL99_3       Lv 99 Aura Bubble
        //203: [{}],    //EF_GUMGANG       Fury (Visual Effect)

        204: [{    //EF_POTION1    Red Herb/Potion
            type: 'STR',
            file: '\xbb\x21\xb0\x4c\x41\xf7\x31\xc7', //»!°LA÷1Ç
            attachedEntity: true
        }],


        205: [{    //EF_POTION2    Orange Potion
            type: 'STR',
            file: '\xc1\xd6\x45\xab\x41\xf7\x31\xc7', //ÁÖE«A÷1Ç
            attachedEntity: true
        }],


        206: [{    //EF_POTION3    Yellow Herb/Potion
            type: 'STR',
            file: '\x33\xeb\xb6\x6f\x41\xf7\x31\xc7', //3ë¶oA÷1Ç
            attachedEntity: true
        }],


        207: [{    //EF_POTION4    White Herb/Potion
            type: 'STR',
            file: '\xc7\x49\x33\xe1\x41\xf7\x31\xc7', //ÇI3áA÷1Ç
            attachedEntity: true
        }],


        208: [{    //EF_POTION5    Blue Herb/Potion
            type: 'STR',
            file: '\x41\xc4\xb6\x6f\x41\xf7\x31\xc7', //AÄ¶oA÷1Ç
            attachedEntity: true
        }],


        209: [{    //EF_POTION6    Green Herb/Potion
            type: 'STR',
            file: '\x41\x45\xb7\x49\x41\xf7\x31\xc7', //AE·IA÷1Ç
            attachedEntity: true
        }],


        210: [{    //EF_POTION7    Yellow Circle Healing Effect
            type: 'STR',
            file: 'fruit',
            attachedEntity: true
        }],


        211: [{    //EF_POTION8    Blue Circle Healing Effect
            type: 'STR',
            file: 'fruit_',
            attachedEntity: true
        }],


        212: [{    //EF_DARKBREATH    Dark Breath
            type: 'SPR',
            file: 'darkbreath',
            head: true,
            attachedEntity: true
        }],


        213: [{    //EF_DEFFENDER    Defender
            type: 'STR',
            file: 'deffender',
            attachedEntity: true
        }],


        214: [{    //EF_KEEPING    Keeping
            type: 'STR',
            file: 'keeping',
            attachedEntity: true
        }],


        218: [{    //EF_POTION_CON    Concentration Potion
            type: 'STR',
            file: '\xc1\xfd\xc1\xdf', //ÁýÁß
            attachedEntity: true
        }],


        219: [{    //EF_POTION_    Awakening Potion
            type: 'STR',
            file: '\xb0\x63\x31\x6f', //°c1o
            attachedEntity: true
        }],


        220: [{    //EF_POTION_BERSERK    Berserk Potion
            type: 'STR',
            file: '\x31\xf6\x31\xad\x41\xa9', //1ö1­A©
            attachedEntity: true
        }],

        //221: [{}],    //EF_POTIONPILLAR       Intense light beam
        //222: [{}],    //EF_DEFENDER       Defender (Crusader)
        //223: [{}],    //EF_GANBANTEIN       Holy Cast Aura
        //224: [{}],    //EF_WIND       Wind (Map effect)
        //225: [{}],    //EF_VOLCANO       Volcano casting effect
        //226: [{}],    //EF_GRANDCROSS       Grand Cross Effect

        227: [{ //Intimidate / Snatch    //EF_INTIMIDATE    Snatch
            wav:  'effect/rog_intimidate',
            attachedEntity: true
        }],

        //228: [{}],    //EF_CHOOKGI       (Nothing)
        //229: [{}],    //EF_CLOUD       (Nothing)
        //230: [{}],    //EF_CLOUD2       (Nothing)
        //231: [{}],    //EF_MAPPILLAR       Map Light Pillar Animation 1
        //232: [{}],    //EF_LINELINK       Sacrifice (Visual Effect)
        //233: [{}],    //EF_CLOUD3       Fog

        234: [{    //EF_SPELLBREAKER    Spell Breaker
            type: 'STR',
            file: 'spell',
            attachedEntity: true
        }],


        235: [{    //EF_DISPELL    Dispell
            type: 'STR',
            file: '\xb5\x3f\x31\x6f\x41\xe7', //µ?1oAç
            attachedEntity: true
        }],

        //236: [{}],    //EF_DELUGE       Deluge Cast Aura
        //237: [{}],    //EF_VIOLENTGALE       Violent Gale Cast Aura
        //238: [{}],    //EF_LANDPROTECTOR       Magnetic Earth Cast Aura
        //239: [{}],    //EF_BOTTOM_VO       Volcano (Visual Effect)
        //240: [{}],    //EF_BOTTOM_DE       Deluge (Visual Effect)
        //241: [{}],    //EF_BOTTOM_VI       Violent Gale (Visual Effect)

        242: [{    //EF_BOTTOM_LA    Magnetic Earth (Visual Effect)
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var LPEffect = require('Renderer/Effects/LPEffect');
                this.add(new LPEffect(pos, tick), AID);
            }
        }],

        //243: [{}],    //EF_FASTMOVE       (Invalid)

        244: [{    //EF_MAGICROD    Magic Rod
            type: 'STR',
            file: '\xb8\x41\xc1\xf7\xb7\xce\xb5\x61', //¸AÁ÷·Îµa
            wav:  'effect/sage_magic rod',
            attachedEntity: true
        }],


        245: [{    //EF_HOLYCROSS    Holy Cross
            type: 'STR',
            file: 'holy_cross',
            wav:  'effect/cru_holycross',
            attachedEntity: true
        }],


        246: [{    //EF_SHIELDCHARGE    Shield Charge
            type: 'STR',
            file: 'shield_charge',
            attachedEntity: true
        }],

        //247: [{}],    //EF_MAPPILLAR2       Map Light Pillar Animation 2

        248: [{    //EF_PROVIDENCE    Resistant Souls
            type: 'STR',
            file: 'providence',
            attachedEntity: true
        }],

        249: [{    //EF_SHIELDBOOMERANG    Shield Boomerang
            wav:  'effect/cru_shield boomerang'
        }],

        250: [{    //EF_SPEARQUICKEN       Spear Quicken
			type: 'STR',
            file: 'twohand',
            wav:  'effect/knight_twohandquicken',
            head: true,
            attachedEntity: true
		}],

        251: [{    //EF_DEVOTION    Devotion
            type: 'STR',
            file: 'devotion',
            attachedEntity: true
        }],

        //252: [{}],    //EF_REFLECTSHIELD       Reflect Shield
        //253: [{}],    //EF_ABSORBSPIRITS       Absorb Spirit Spheres
        //254: [{}],    //EF_STEELBODY       Mental Strength (Visual Effect)

        255: [{    //EF_FLAMELAUNCHER    Elemental Endow (Fire)
            type: 'STR',
            file: 'enc_fire',
            attachedEntity: true
        }],


        256: [{    //EF_FROSTWEAPON    Elemental Endow (Water)
            type: 'STR',
            file: 'enc_ice',
            attachedEntity: true
        }],


        257: [{ //endow wind on target    //EF_LIGHTNINGLOADER    Elemental Endow (Wind)
            type: 'STR',
            file: 'enc_wind',
            wav:  'effect/_enemy_hit_wind1',
            attachedEntity: true
        }],


        258: [{    //EF_SEISMICWEAPON    Elemental Endow (Earth)
            type: 'STR',
            file: 'enc_earth',
            attachedEntity: true
        }],

        //259: [{}],    //EF_MAPPILLAR3       Map Light Pillar Animation 3
        //260: [{}],    //EF_MAPPILLAR4       Map Light Pillar Animation 4

        261: [{ //fury / critical explosion TODO: combo sounds, super novice fury    //EF_GUMGANG2    Fury Cast Animation
            wav:  'effect/\x6d\x6f\x6e\x5f\xc6\xf8\xb1\xe2', //mon_Ćř±â
            attachedEntity: true
        }],

        262: [{		//EF_TEIHIT1       Raging Quadruple Blow
			wav:  'effect/\x6d\x6f\x6e\x5f\xc6\xf8\xb1\xe2', //mon_ż¬ČŻ
		}],    
        
		//263: [{}],    //EF_GUMGANG3       Raging Quadruple Blow 2
        //264: [{}],    //EF_TEIHIT2       (Nothing)
		
        265: [{    //EF_TANJI       Throw Spirit Sphere
			wav:  'effect/mon_\xc5\xba\xc1\xf6\xbd\xc5\xc5\xeb', // mon_ĹşÁö˝ĹĹë or g˝şĆ÷ľîŔÍ˝şÇĂ·ÎÁŻ  
            attachedEntity: true
		}],
		
        //266: [{}],    //EF_TEIHIT1X       Raging Quadruple Blow 3
        //267: [{}],    //EF_CHIMTO       Occult Impaction

        268: [{    //EF_STEALCOIN    Steal Coin
            type: 'STR',
            file: 'steal_coin',
            wav:  'rog_steal coin',
            attachedEntity: true
        }],


        269: [{    //EF_STRIPWEAPON    Divest Weapon
            type: 'STR',
            file: 'strip_weapon',
            wav:  'effect/\x74\x5f\x6f\xae\x41\xa8\xb1\x65', //t_o®A¨±e
            attachedEntity: true
        }],


        270: [{    //EF_STRIPSHIELD    Divest Shield
            type: 'STR',
            file: 'strip_shield',
            wav:  'effect/\x74\x5f\x6f\xae\x41\xa8\xb1\x65', //t_o®A¨±e
            attachedEntity: true
        }],


        271: [{    //EF_STRIPARMOR    Divest Armor
            type: 'STR',
            file: 'strip_armor',
            wav:  'effect/\x74\x5f\x6f\xae\x41\xa8\xb1\x65', //t_o®A¨±e
            attachedEntity: true
        }],


        272: [{    //EF_STRIPHELM    Divest Helm
            type: 'STR',
            file: 'strip_helm',
            wav:  'effect/\x74\x5f\x6f\xae\x41\xa8\xb1\x65', //t_o®A¨±e
            attachedEntity: true
        }],

        273: [{    //EF_CHAINCOMBO    Raging Quadruple Blow 4
            type: 'STR',
            file: '\x3f\xac\x45\x97', //?¬E—
            attachedEntity: true
        }],
        
        //274: [{}],    //EF_RG_COIN       Steal Coin Animation

        275: [{ //backstab on target hit    //EF_BACKSTAP    Back Stab Animation
            wav:  'effect/rog_back stap',
            attachedEntity: true
        }],
        
        276: [{ //raging thurst    //EF_TEIHIT3    Raging Thrust
            attachedEntity: true
        }],

        '277_ground': [{ // Dissonance
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var DissonanceEffects = require('Renderer/Effects/Songs').DissonanceEffects;
                DissonanceEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        278: [{    //EF_BOTTOM_LULLABY    Lullaby Map Unit
            wav:  'effect/\xc0\xda\xc0\xe5\xb0\xa1', //ŔÚŔĺ°ˇ
            attachedEntity: true
        }],

        '278_ground': [{ // Lullaby
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var LullabyEffects = require('Renderer/Effects/Songs').LullabyEffects;
                LullabyEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        279: [{    //EF_BOTTOM_RICHMANKIM    Mr Kim a Rich Man Map Unit
            wav:  'effect/\xb1\xe8\xbc\xad\xb9\xe6\xb5\xb7', //±čĽ­ąćµ·
            attachedEntity: true
        }],

        '279_ground': [{ // Mr Kim
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var MrKimEffects = require('Renderer/Effects/Songs').MrKimEffects;
                MrKimEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        280: [{    //EF_BOTTOM_ETERNALCHAOS    Eternal Chaos Map Unit
            wav:  'effect/\xbf\xb5\xbf\xf8\xc0\xc7\x20\xc8\xa5\xb5\xb7', //żµżřŔÇ ČĄµ·
            attachedEntity: true
        }],

        '280_ground': [{ // Chaos
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var EtChaosEffects = require('Renderer/Effects/Songs').EtChaosEffects;
                EtChaosEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        281: [{    //EF_BOTTOM_DRUMBATTLEFIELD    A Drum on the Battlefield Map Unit
            wav:  'effect/\xc0\xfc\xc0\xe5\xc0\xc7', //ŔüŔĺŔÇ
            attachedEntity: true
        }],

        '281_ground': [{ // Drum on battlefield
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var DrumEffects = require('Renderer/Effects/Songs').DrumEffects;
                DrumEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        282: [{    //EF_BOTTOM_RINGNIBELUNGEN    The Ring Of Nibelungen Map Unit
            wav:  'effect/\xb4\xcf\xba\xa7\xb7\xee\xb0\xd5\xc0\xc7\x20\xb9\xdd\xc1\xf6', //´Ďş§·î°ŐŔÇ ąÝÁö
            attachedEntity: true
        }],

        '282_ground': [{ // Ring nibelun
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var NibelungEffects = require('Renderer/Effects/Songs').NibelungEffects;
                NibelungEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        283: [{    //EF_BOTTOM_ROKISWEIL    Loki's Veil Map Unit
            wav:  'effect/\xb7\xce\xc5\xb0', //·ÎĹ°
            attachedEntity: true
        }],

        '283_ground': [{ // Loki Veil
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var LokiEffects = require('Renderer/Effects/Songs').LokiEffects;
                LokiEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        284: [{    //EF_BOTTOM_INTOABYSS    Into the Abyss Map Unit
            wav:  'effect/\xbd\xc9\xbf\xac\xbc\xd3\xc0\xb8\xb7\xce', //˝Éż¬ĽÓŔ¸·Î
            attachedEntity: true
        }],

        '284_ground': [{ // Into abyss
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var AbyssEffects = require('Renderer/Effects/Songs').AbyssEffects();
                AbyssEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        285: [{    //EF_BOTTOM_SIEGFRIED    Invunerable Siegfriend Map Unit
            wav:  'effect/\xba\xd2\xbb\xe7\xbd\xc5', //şŇ»ç˝Ĺ
            attachedEntity: true
        }],

        '285_ground': [{ // Invulnerable Sieg
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var SiegfiedEffects = require('Renderer/Effects/Songs').SiegfiedEffects;
                SiegfiedEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        286: [{    //EF_BOTTOM_WHISTLE    A Wistle Map Unit
            wav:  'effect/\xb4\xde\xba\xfb\xbc\xbc\xb7\xb9\xb3\xaa\xb5\xa5', //´ŢşűĽĽ·ąłŞµĄ
            attachedEntity: true
        }],

        '286_ground': [{ // A whistle
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var WhistleEffects = require('Renderer/Effects/Songs').WhistleEffects;
                WhistleEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        287: [{    //EF_BOTTOM_ASSASSINCROSS    Assassin Cross of Sunset Map Unit
            wav:  'effect/\xbc\xae\xbe\xe7\xc0\xc7\x20\xbe\xee\xbd\xd8\xbd\xc5', //Ľ®ľçŔÇ ľî˝Ř˝Ĺ
            attachedEntity: true
        }],

        '287_ground': [{ // Assassin cross
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var SinEffects = require('Renderer/Effects/Songs').SinEffects;
                SinEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        288: [{    //EF_BOTTOM_POEMBRAGI    A Poem of Bragi Map Unit
            wav:  'effect/\xba\xea\xb6\xf3\xb1\xe2\xc0\xc7\x20\xbd\xc3', //şę¶ó±âŔÇ ˝Ă
            attachedEntity: true
        }],

        '288_ground': [{ // Bragi
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var BragiEffects = require('Renderer/Effects/Songs').BragiEffects();
                BragiEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        289: [{    //EF_BOTTOM_APPLEIDUN    The Apple Of Idun Map Unit
            wav:  'effect/\xc0\xcc\xb5\xd0\xc0\xc7\x20\xbb\xe7\xb0\xfa',
            //ISO-8859-1:    ÀÌµÐÀÇ »ç°ú
            //Windows 1250: ŔĚµĐŔÇ »ç°ú
            //EUC-KR:         이둔의 사과
            //Hex:             \xc0\xcc\xb5\xd0\xc0\xc7\x20\xbb\xe7\xb0\xfa
            //reference for finding encoding
            attachedEntity: true
        }],

        '289_ground': [{ // Apple
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var AppleEffects = require('Renderer/Effects/Songs').AppleEffects;
                AppleEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        '290_ground': [{ // Ugly
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var UglyEffects = require('Renderer/Effects/Songs').UglyEffects;
                UglyEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        291: [{    //EF_BOTTOM_HUMMING    Humming Map Unit
            wav:  'effect/\xc8\xef\xbe\xf3\xb0\xc5\xb8\xb2', //Čďľó°Ĺ¸˛
            attachedEntity: true
        }],

        '291_ground': [{ // Humming
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var HummingEffects = require('Renderer/Effects/Songs').HummingEffects;
                HummingEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        292: [{    //EF_BOTTOM_DONTFORGETME    Please don't Forget Me Map Unit
            wav:  'effect/\xb3\xaa\xb8\xa6\xc0\xd8\xc1\xf6\xb8\xbb\xbe\xc6\xbf\xe4', //łŞ¸¦ŔŘÁö¸»ľĆżä
            attachedEntity: true
        }],

        '292_ground': [{ // Dont forget
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var ForgetEffects = require('Renderer/Effects/Songs').ForgetEffects;
                ForgetEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        293: [{    //EF_BOTTOM_FORTUNEKISS    Fortune's Kiss Map Unit
            wav:  'effect/\xc7\xe0\xbf\xee\xc0\xc7', //ÇŕżîŔÇ
            attachedEntity: true
        }],

        '293_ground': [{ // Fortune kiss /ladyluck
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var FortuneEffects = require('Renderer/Effects/Songs').FortuneEffects;
                FortuneEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        294: [{    //EF_BOTTOM_SERVICEFORYOU    Service For You Map Unit
            wav:  'effect/\xb4\xe7\xbd\xc5\xc0\xbb\x20\xc0\xa7\xc7\xd1\x20\xbc\xad\xba\xf1\xbd\xba', //´ç˝ĹŔ» Ŕ§ÇŃ Ľ­şń˝ş
            attachedEntity: true,
        }],

        '294_ground': [{ // Service
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var ServiceEffects = require('Renderer/Effects/Songs').ServiceEffects;
                ServiceEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        //295: [{}],    //EF_TALK_FROSTJOKE       Frost Joke
        //296: [{}],    //EF_TALK_SCREAM       Scream
        //297: [{}],    //EF_POKJUK       Fire Works (Visual Effect)
        //298: [{}],    //EF_THROWITEM       Acid Terror Animnation
        //299: [{}],    //EF_THROWITEM2       (Nothing)
        //300: [{}],    //EF_CHEMICALPROTECTION       Chemical Protection
        //301: [{}],    //EF_POKJUK_SOUND       Fire Works (Sound Effect)

        302: [{    //EF_DEMONSTRATION    Bomb
            type: 'SPR',
            file: '\xb5\x59\xb8\xf3\x31\x6f\x41\xae\xb7\x31\x41\x49\x31\xc7', //µY¸ó1oA®·1AI1Ç
            attachedEntity: false
        }],

        304: [{ //teleportation animation    //EF_TELEPORTATION2    Teleportation Animation
            alphaMax: 0.5,
            animation: 5,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.3,
            delay: 1500,
            fade: false,
            green: 0.6,
            height: 35,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 0.3,
            type: 'CYLINDER',
            wav: 'effect/ef_teleportation'
        }, {
            alphaMax: 0.5,
            animation: 5,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.6,
            delay: 1500,
            fade: false,
            green: 0.6,
            height: 25,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 0.8,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.5,
            animation: 5,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.8,
            delay: 1500,
            fade: false,
            green: 0.6,
            height: 13,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.5,
            animation: 5,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 1,
            delay: 1500,
            fade: false,
            green: 0.6,
            height: 5,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 1.3,
            type: 'CYLINDER'
        }],

        305: [{ //potion success    //EF_PHARMACY_OK    Pharmacy Success
            type: 'STR',
            file: 'p_success',
            wav: 'effect/p_success',
            attachedEntity: true
        }],


        306: [{ //potion failed    //EF_PHARMACY_FAIL    Pharmacy Failed
            type: 'STR',
            file: 'p_failed',
            wav: 'effect/p_failed',
            attachedEntity: true
        }],

        //307: [{}],    //EF_FORESTLIGHT       Forest Light 1
        //308: [{}],    //EF_THROWITEM3       Throw Stone
        //309: [{}],    //EF_FIRSTAID       First Aid
        //310: [{}],    //EF_SPRINKLESAND       Sprinkle Sand

        311: [{ //crazy uproar    //EF_LOUD    Crazy Uproar
            type: 'STR',
            file: 'loud',
            wav: 'effect/\xb0\xed\xbc\xba\xb9\xe6\xb0\xa1', //°íĽşąć°ˇ
            attachedEntity: true
        }],

        312: [{ //EF_HEAL       Heal Effect
			alphaMax: 0.2,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.7,
            bottomSize: 0.95,
            delay: 1500,
            fade: false,
            green: 1,
            height: 8,
            red: 0.7,
            rotate: true,
            textureName: 'ring_white',
            topSize: 0.95,
            type: 'CYLINDER',
            wav: '_heal_effect'
        }, {
            alphaMax: 0.2,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.7,
            bottomSize: 1,
            delay: 1500,
            fade: false,
            green: 1,
            height: 8,
            red: 0.7,
            rotate: true,
            textureName: 'ring_white',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.6,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            delay: 1300,
            delayOffset: 400,
            duplicate: 15,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1.5,
            posyRand: 1.5,
            poszEndRand: 2,
            poszEndRandMilieu: 6,
            poszStart: 0,
            red: 1,
            size: 9,
            sizeRand: 2,
            timeBetweenDupli: 10,
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.6,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            delay: 1100,
            delayLate: 200,
            duplicate: 7,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1,
            posyRand: 1,
            poszEnd: 5,
            poszStartRand: 1,
            poszStartRandMilieu: 0,
            red: 1,
            size: 9,
            sizeRand: 2,
            timeBetweenDupli: 50,
            type: '3D',
            zIndex: 1
        }],
		
        313: [{ //EF_HEAL2       Heal Effect 2
			alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.7,
            bottomSize: 1.1,
            delay: 1500,
            fade: false,
            green: 1,
            height: 15,
            red: 0.7,
            rotate: true,
            textureName: 'ring_white',
            topSize: 1.1,
            type: 'CYLINDER',
            wav: '_heal_effect'
        }, {
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.7,
            bottomSize: 1,
            delay: 1500,
            fade: false,
            green: 1,
            height: 13,
            red: 0.7,
            rotate: true,
            textureName: 'ring_white',
            topSize: 1,
            type: 'CYLINDER',
            wav: '_heal_effect'
        }, {
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.7,
            bottomSize: 1.1,
            delay: 1500,
            fade: false,
            green: 1,
            height: 2,
            red: 0.7,
            rotate: true,
            textureName: 'ring_white',
            topSize: 3,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.8,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            delay: 1500,
            duplicate: 4,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1.2,
            posyRand: 1.2,
            poszEndRand: 1,
            poszEndRandMilieu: 8,
            poszStart: 0,
            red: 1,
            size: 9,
            sizeRand: 2,
            sparkling: false,
            sparkNumber: 2,
            timeBetweenDupli: 10,
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.8,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            delay: 1300,
            delayOffset: 400,
            duplicate: 20,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1.5,
            posyRand: 1.5,
            poszEndRand: 3,
            poszEndRandMilieu: 6,
            poszStart: 0,
            red: 1,
            size: 9,
            sizeRand: 2,
            sparkling: false,
            sparkNumber: 2,
            timeBetweenDupli: 10,
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.8,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            delay: 1100,
            delayLate: 200,
            duplicate: 10,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1,
            posyRand: 1,
            poszEnd: 6,
            poszStartRand: 1,
            poszStartRandMilieu: 0,
            red: 1,
            size: 9,
            sizeRand: 2,
            timeBetweenDupli: 50,
            type: '3D',
            zIndex: 1
        }],
		
        314: [{ //EF_EXIT2       Old Map Exit effect (Unused)
			alphaMax: 0.3,
            animation: 1,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.3,
            delay: 1500,
            fade: false,
            green: 0.5,
            height: 35,
            red: 0.5,
            rotate: true,
            textureName: 'ring_blue',
            topSize: 0.3,
            type: 'CYLINDER',
            wav: 'effect/ef_teleportation'
        }, {
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.4,
            delay: 1500,
            fade: false,
            green: 0.5,
            height: 23,
            red: 0.5,
            rotate: true,
            textureName: 'ring_blue',
            topSize: 0.6,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.5,
            delay: 1500,
            fade: false,
            green: 0.5,
            height: 5,
            red: 0.5,
            rotate: true,
            textureName: 'ring_blue',
            topSize: 0.7,
            type: 'CYLINDER'
        }],

        315: [{    //EF_GLASSWALL2    Safety Wall
            attachedEntity: true,
            file: 'safetywall',
            type: 'STR'
        }, {
            alphaMax: 0.4,
            animation: 0,
            attachedEntity: true,
            blendMode: 2,
            blue: 0.5,
            bottomSize: 0.6,
            delay: 50000,
            fade: true,
            green: 0.1,
            height: 7,
            red: 0.5,
            rotate: false,
            textureName: 'alpha_down',
            topSize: 0.6,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.4,
            animation: 0,
            attachedEntity: true,
            blendMode: 2,
            blue: 0.5,
            bottomSize: 0.65,
            delay: 50000,
            delayOffset: 50,
            fade: true,
            green: 0.1,
            height: 6,
            red: 0.5,
            rotate: false,
            textureName: 'alpha_down',
            topSize: 0.65,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.4,
            animation: 0,
            attachedEntity: true,
            blendMode: 2,
            blue: 0.5,
            bottomSize: 0.7,
            delay: 50000,
            delayOffset: 100,
            fade: true,
            green: 0.1,
            height: 7,
            red: 0.5,
            rotate: false,
            textureName: 'alpha_down',
            topSize: 0.7,
            type: 'CYLINDER'
        }],
        
        '315_ground': [{
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var Cylinder = require('Renderer/Effects/Cylinder');
                this.add(new Cylinder(pos, 0.7, 0.7, 20, 'magic_violet', tick), AID);
            }
        }],

        316: [{ //Warp Portal Animation 1    //EF_READYPORTAL2    Warp Portal Animation 1
            alphaMax: 1,
            animation: 4,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 2.7,
            delay: 500,
            duplicate: 15,
            fadeOut: false,
            green: 1,
            height: 0.1,
            posZ: 0.1,
            red: 1,
            rotate: true,
            textureName: 'ring_white',
            timeBetweenDupli: 200,
            topSize: 3.9,
            type: 'CYLINDER',
            wav: 'effect/ef_readyportal'
        }],

        317: [{ //Warp Portal Animation 2    //EF_PORTAL2    Warp Portal Animation 2
            alphaMax: 0.4,
            animation: 4,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 2.4,
            delay: 500,
            duplicate: 115,
            fadeOut: false,
            green: 0.6,
            height: 0.1,
            posZ: 0.1,
            red: 0.6,
            rotate: true,
            textureName: 'ring_blue',
            timeBetweenDupli: 200,
            topSize: 3.9,
			wav: 'effect/ef_readyportal',
            type: 'CYLINDER'
        }, {
            alphaMax: 0.5,
            animation: 0,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.6,
            delay: 24000,
            fade: false,
            green: 0.6,
            height: 15,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 0.6,
            wav: 'effect/ef_portal',
            type: 'CYLINDER'
        }, {
            alphaMax: 0.5,
            animation: 0,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.8,
            delay: 24000,
            fade: false,
            green: 0.6,
            height: 13,
            red: 0.6,
            rotate: false,
            textureName: 'ring_blue',
            topSize: 0.8,
            type: 'CYLINDER'
        }, {
            alphaMax: 1,
            animation: 0,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 1,
            delay: 24000,
            fade: false,
            green: 0.6,
            height: 1,
            posZ: 2,
            red: 0.6,
            rotate: false,
            semiCircle: false,
            textureName: 'alpha1',
            topSize: 1,
            type: 'CYLINDER'
        }],

        'deluge_ground': [{
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var PropertyGround = require('Renderer/Effects/PropertyGround');
                this.add(new PropertyGround(pos, 3.0, 1.0, 2, 'ring_blue', tick), AID);
            }
        }],
        
        'soulink_caster_effect': [{ // todo
            wav:  'effect/\x74\x5f\x6f\xae\x41\xa8\xb1\x65', //t_o®A¨±e
            attachedEntity: false
        }],

        'soulink_target_effect': [{ // todo
            wav:  'effect/\x74\x5f\xbf\xb5\xc8\xa5', //t_żµČĄ
            attachedEntity: true
        }],

        'gunslinger_coin': [{ // coin caster
            wav:  'effect/\xc7\xc3\xb8\xb3', //ÇĂ¸ł
            attachedEntity: true
        }],
        
        'coldbolt': [{ //coldbolt falling objects
            wav:  'effect/ef_icearrow%d',
            rand: [1, 3],
            attachedEntity: true
        }],
        
        'firebolt': [{ //fireolt falling objects
            wav:  'effect/ef_firearrow%d',
            rand: [1, 3],
            attachedEntity: true
        }],

        318: [{    //EF_BOTTOM_MAG    Magnus Exorcisimus Map Unit
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var FlatColorTile = require('Renderer/Effects/FlatColorTile');
                var WhiteTile = FlatColorTile('white', {r: 1, g: 1, b: 1, a: 0.8});
                this.add(new WhiteTile(pos, tick), AID);
                //this.add(new SquareGround(pos, 1.0, 1.0, 3.0, 'magic_green', tick), AID);
            }
        }],

        319: [{    //EF_BOTTOM_SANC    Sanctuary Map Unit
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var FlatColorTile = require('Renderer/Effects/FlatColorTile');
                var WhiteTile = FlatColorTile('white', {r: 1, g: 1, b: 1, a: 0.8});
                this.add(new WhiteTile(pos, tick), AID);
                //this.add(new SquareGround(pos, 1.0, 1.0, 3.0, 'magic_green', tick), AID);
            }
        }],
        
        320: [{  //EF_HEAL3       Offensive Heal
			alphaMax: 0.2,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.95,
            delay: 1000,
            fade: false,
            green: 1,
            height: 10,
            red: 1,
            rotate: true,
            textureName: 'ring_white',
            topSize: 0.95,
            type: 'CYLINDER',
            wav: '_heal_effect'
        }, {
            alphaMax: 0.2,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 1,
            delay: 1000,
            fade: false,
            green: 1,
            height: 9,
            red: 1,
            rotate: true,
            textureName: 'ring_white',
            topSize: 1,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.8,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            delay: 1000,
            delayOffset: 400,
            duplicate: 10,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1.5,
            posyRand: 1.5,
            poszEndRand: 3,
            poszEndRandMilieu: 6,
            poszStart: 0,
            red: 1,
            size: 9,
            sizeRand: 2,
            sparkling: false,
            sparkNumber: 2,
            timeBetweenDupli: 10,
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.8,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            delay: 900,
            delayLate: 200,
            duplicate: 5,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1,
            posyRand: 1,
            poszEnd: 6,
            poszStartRand: 1,
            poszStartRandMilieu: 0,
            red: 1,
            size: 9,
            sizeRand: 2,
            sparkling: false,
            sparkNumber: 2,
            timeBetweenDupli: 50,
            type: '3D',
            zIndex: 1
        }],
        321: [{  //EF_WARPZONE2       Warp NPC
			alphaMax: 0.3,
            animation: 3,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 2,
            delay: 2800,
            fade: false,
            green: 0.5,
            height: 1.1,
            red: 0.5,
            rotate: true,
            textureName: 'ring_blue',
            topSize: 3.3,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.3,
            animation: 3,
            attachedEntity: true,
            blendMode: 2,
            blue: 1,
            bottomSize: 1.9,
            delay: 2800,
            fade: false,
            green: 0.5,
            height: 1.1,
            red: 0.5,
            rotate: true,
            textureName: 'ring_blue',
            topSize: 3.2,
            type: 'CYLINDER'
        }/*, {
            alphaMax: 1,
            attachedEntity: true,
            blue: 1,
            delay: 1000,
            duplicate: 3,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok1.tga',
            green: 1,
            posxStartRand: 3,
            posxStartRandMilieu: 0,
            posyStartRand: 3,
            posyStartRandMilieu: 0,
            poszEndRand: 2,
            poszEndRandMilieu: 2,
            poszStart: 0,
            red: 1,
            size: 100,
            sizeRand: 17,
            type: '3D',
            zIndex: 1
        }*/],
        //322: [{}],    //EF_FORESTLIGHT2       Forest Light 2
        //323: [{}],    //EF_FORESTLIGHT3       Forest Light 3
        //324: [{}],    //EF_FORESTLIGHT4       Forest Light 4
        325: [{  //EF_HEAL4       Heal Effect 4
			alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.7,
            bottomSize: 1.1,
            delay: 1500,
            fade: false,
            green: 1,
            height: 18,
            red: 0.7,
            rotate: true,
            textureName: 'ring_white',
            topSize: 1.1,
            type: 'CYLINDER',
            wav: '_heal_effect'
        }, {
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.7,
            bottomSize: 1,
            delay: 1500,
            fade: false,
            green: 1,
            height: 15,
            red: 0.7,
            rotate: true,
            textureName: 'ring_white',
            topSize: 1,
            type: 'CYLINDER',
            wav: '_heal_effect'
        }, {
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 0.7,
            bottomSize: 1.1,
            delay: 1500,
            fade: false,
            green: 1,
            height: 3,
            red: 0.7,
            rotate: true,
            textureName: 'ring_white',
            topSize: 3,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.8,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 1500,
            duplicate: 7,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1.2,
            posyRand: 1.2,
            poszEndRand: 1,
            poszEndRandMilieu: 8,
            poszStart: 0,
            red: 1,
            size: 9,
            sizeRand: 2,
            sparkling: false,
            sparkNumber: 3,
            timeBetweenDupli: 10,
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.8,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 1300,
            delayOffset: 400,
            duplicate: 25,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1.5,
            posyRand: 1.5,
            poszEndRand: 3,
            poszEndRandMilieu: 6,
            poszStart: 0,
            red: 1,
            size: 10,
            sizeRand: 5,
            sparkling: false,
            sparkNumber: 3,
            timeBetweenDupli: 10,
            type: '3D',
            zIndex: 1
        }, {
            alphaMax: 0.8,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            delay: 1100,
            delayLate: 200,
            duplicate: 15,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/pok3.tga',
            green: 1,
            posxRand: 1,
            posyRand: 1,
            poszEnd: 6,
            poszStartRand: 1,
            poszStartRandMilieu: 0,
            red: 1,
            size: 11,
            sizeRand: 2,
            timeBetweenDupli: 50,
            type: '3D',
            zIndex: 1
        }],
        //326: [{}],    //EF_FOOT       Chase Walk Left Foot
        //327: [{}],    //EF_FOOT2       Chse Walk Right Foot
        //328: [{}],    //EF_BEGINASURA       Monk Asura Strike
        //329: [{}],    //EF_TRIPLEATTACK       Triple Strike
        //330: [{}],    //EF_HITLINE       Combo Finish
        //331: [{}],    //EF_HPTIME       Natural HP Regeneration
        //332: [{}],    //EF_SPTIME       Natural SP Regeneration
        //333: [{}],    //EF_MAPLE       Autumn Leaves
        //334: [{}],    //EF_BLIND       Blind
        //335: [{}],    //EF_POISON       Poison

        336: [{ //kyrie eleison / parrying    (when target blocked dmg)    //EF_GUARD    Kyrie Eleison/Parrying Shield
            wav:  'effect/kyrie_guard',
            attachedEntity: true
        }],

        337: [{    //EF_JOBLVUP50    Class Change
            type: 'STR',
            file: 'joblvup',
            attachedEntity: true
        }],

        //338: [{}],    //EF_ANGEL2       Super Novice/Taekwon Level Up Angel
        //339: [{}],    //EF_MAGNUM2       Spiral Pierce
        //340: [{}],    //EF_CALLZONE       (Nothing)
        //341: [{}],    //EF_PORTAL3       Wedding Warp Portal
        //342: [{}],    //EF_COUPLECASTING       Wedding Skill
        //343: [{}],    //EF_HEARTCASTING       Another Merry Skill
        344: [{ //EF_ENTRY2       Character map entry effect
			alphaMax: 0.2,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.9,
            delay: 500,
            fade: false,
            green: 0.5,
            height: 7.5,
            red: 0.5,
            rotate: false,
            textureName: 'ring_white',
            topSize: 0.9,
            type: 'CYLINDER',
            wav: 'effect/ef_portal'
        }, {
            alphaMax: 0.2,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.85,
            delay: 500,
            fade: false,
            green: 0.5,
            height: 8,
            red: 0.5,
            rotate: false,
            textureName: 'ring_white',
            topSize: 0.85,
            type: 'CYLINDER'
        }, {
            alphaMax: 0.3,
            animation: 1,
            attachedEntity: false,
            blendMode: 2,
            blue: 1,
            bottomSize: 0.9,
            delay: 500,
            fade: false,
            green: 0.5,
            height: 1,
            red: 0.5,
            rotate: false,
            textureName: 'ring_white',
            topSize: 1.5,
            type: 'CYLINDER'
        }],
        //345: [{}],    //EF_SAINTWING       Wings (Animated)
        //346: [{}],    //EF_SPHEREWIND       Like Moonlight But Blue
		
        347: [{    //EF_COLORPAPER       Wedding Ceremony
			wav:  'effect/wedding'
		}],
		
        //348: [{}],    //EF_LIGHTSPHERE       Like 1000 Blade trepassing
        //349: [{}],    //EF_WATERFALL       Waterfall (Horizonatal)
        //350: [{}],    //EF_WATERFALL_90       Waterfall (Vertical)
        //351: [{}],    //EF_WATERFALL_SMALL       Small Waterfall (Horizonatal)
        //352: [{}],    //EF_WATERFALL_SMALL_90       Small Waterfall (Vertical)
        //353: [{}],    //EF_WATERFALL_T2       Dark Waterfall (Horizonatal)
        //354: [{}],    //EF_WATERFALL_T2_90       Dark Waterfall (Vertical)
        //355: [{}],    //EF_WATERFALL_SMALL_T2       Dark Small Waterfall (Horizonatal)
        //356: [{}],    //EF_WATERFALL_SMALL_T2_90       Dark Small Waterfall (Vertical)
        //357: [{}],    //EF_MINI_TETRIS       (Nothing)
        //358: [{}],    //EF_GHOST       Niflheim Ghost
        //359: [{}],    //EF_BAT       Niflheim Bat Slow
        //360: [{}],    //EF_BAT2       Niflheim Bat Fast
		
        361: [{    //EF_SOULBREAKER       Soul Destroyer
			wav:  'effect/\xb1\xe2\xb0\xf8\xc6\xf7', //±â°řĆ÷
            attachedEntity: true
		}],
		
        //362: [{}],    //EF_LEVEL99_4       Trancendant Level 99 Aura 1

        363: [{    //EF_VALLENTINE    Valentine Day Heart With Wings
            type: 'SPR',
            file: 'vallentine',
            attachedEntity: true
        }],       
        
        //364: [{}],    //EF_VALLENTINE2       Valentine Day Heart
        //365: [{}],    //EF_PRESSURE       Gloria Domini
        //366: [{}],    //EF_BASH3D       Martyr's Reckoning
        
        367: [{ //aura blade    //EF_AURABLADE    Aura Blade
            wav:  'effect/\xbf\xc0\xb6\xf3\x20\xba\xed\xb7\xb9\xc0\xcc\xb5\xe5', //żŔ¶ó şí·ąŔĚµĺ
            attachedEntity: true
            //+ on cast small white-magic aura (double)
        }],
        
        368: [{    //EF_REDBODY    Berserk
            wav:  'effect/\xef\x82\xb9\xef\x83\xb6\xef\x82\xbc\xef\x82\xad\xc5\xa9',
            attachedEntity: true
            //shake screen
        }],

        369: [{    //EF_LKCONCENTRATION    Concentration
            type: 'STR',
            file: 'twohand',
            wav:  'effect/knight_twohandquicken',
            head: true,
            attachedEntity: true
        }],

        370: [{    //EF_BOTTOM_GOSPEL    Gospel Map Unit
            wav:  'effect/\xb0\xa1\xbd\xba\xc6\xe7', //°ˇ˝şĆç
            attachedEntity: true
        }],

        '370_ground': [{ // Gospel
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var GospelEffects = require('Renderer/Effects/Songs').GospelEffects;
                GospelEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],


        371: [{    //EF_ANGEL    Level Up
            type: 'STR',
            file: 'angel',
            wav:  'levelup',
            attachedEntity: true
        }],


        372: [{    //EF_DEVIL    Death
            type: 'STR',
            file: 'devil',
            attachedEntity: true
        }],


        373: [{    //EF_DRAGONSMOKE    House Smoke
            type: 'SPR',
            file: 'poisonhit',
            attachedEntity: true
        }],

        //374: [{}],    //EF_BOTTOM_BASILICA       Basilica
        //375: [{}],    //EF_ASSUMPTIO       Assumptio (Visual Effect)
        //376: [{}],    //EF_HITLINE2       Palm Strike
        //377: [{}],    //EF_BASH3D2       Matyr's Reckoning 2
        //378: [{}],    //EF_ENERGYDRAIN2       Soul Drain (1st Part)
        //379: [{}],    //EF_TRANSBLUEBODY       Soul Drain (2nd Part)
        
		380: [{    //EF_MAGICCRASHER       Magic Crasher
			wav:  'effect/\xb8\xc5\xc1\xf7\x20\xc5\xa9\xb7\xa1\xbd\xac', //¸ĹÁ÷ Ĺ©·ˇ˝¬
            attachedEntity: true
		}],
		
        //381: [{}],    //EF_LIGHTSPHERE2       Blue Starburst (Unknown use)

        382: [{    //EF_LIGHTBLADE    (Nothing)
            type: 'SPR',
            file: '\xc7\x4e\x6f\x31\x41\xb5\xbb\xe7', //ÇNo1Aµ»ç
            head: true,
            attachedEntity: true
        }],

        //383: [{}],    //EF_ENERGYDRAIN3       Health Conversion
        //384: [{}],    //EF_LINELINK2       Soul Change (Sound Effect)
        //385: [{}],    //EF_LINKLIGHT       Soul Change (Visual Effect)
        //386: [{}],    //EF_TRUESIGHT       True Sight
        //387: [{}],    //EF_FALCONASSAULT       Falcon Assault
        //388: [{}],    //EF_TRIPLEATTACK2       Focused Arrow Strike (Sound Effect)

        389: [{ //windwalk    //EF_PORTAL4    Wind Walk
            wav:  'effect/\xc0\xa9\xb5\xe5\xbf\xf6\xc5\xa9', //Ŕ©µĺżöĹ©
            attachedEntity: true
        }],

        390: [{    //EF_MELTDOWN    Shattering Strike
            type: 'STR',
            file: 'melt',
            attachedEntity: true
        }],


        391: [{    //EF_CARTBOOST    Cart Boost
            type: 'STR',
            file: 'cart',
            attachedEntity: true
        }],


        392: [{    //EF_REJECTSWORD    Reject Sword
            type: 'STR',
            file: 'sword',
            attachedEntity: true
        }],
        
        //393: [{}],    //EF_TRIPLEATTACK3       Arrow Vulcan
        
        394: [{ // Moonlit water mill/sheltering bliss    //EF_SPHEREWIND2    Sheltering Bliss
            type: 'FUNC',
            wav:  'effect/\xb4\xde\xba\xfb\xbc\xbc\xb7\xb9\xb3\xaa\xb5\xa5',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var FlatColorTile = require('Renderer/Effects/FlatColorTile');
                var BlueTile = FlatColorTile('salmon', {r: 0xff/255, g: 0x8a/255, b: 0xbb/255, a: 0.6});
                this.add(new BlueTile(pos, tick), AID);
            }
        }],

        //395: [{}],    //EF_LINELINK3       Marionette Control (Sound Effect)
        //396: [{}],    //EF_PINKBODY       Marionette Control (Visual Effect)
        //397: [{}],    //EF_LEVEL99_5       Trancended 99 Aura (Middle)
        //398: [{}],    //EF_LEVEL99_6       Trancended 99 Aura (Bottom)

        399: [{ //headcrush caster    //EF_BASH3D3    Head Crush
            wav:  'effect/\xc7\xec\xb5\xe5\x20\xc5\xa9\xb7\xaf\xbd\xac', //Çěµĺ Ĺ©·Ż˝¬
            //same effect on caster like 'Bash' but stripes are yellow + assumptio effect on caster
            attachedEntity: true
        }],
        
        400: [{ //joint beat caster    //EF_BASH3D4    Joint Beat
            //sound missing
            //same effect on caster like 'Bash' + assumptio effect on caster
            attachedEntity: true
        }],
        
        'charge_attack': [{ //charge attack (quest-skill)
            //same effect on target like 'Bash'
            attachedEntity: true
        }],
        
        //401: [{}],    //EF_NAPALMVALCAN       Napalm Vulcan Sound
        //402: [{}],    //EF_PORTAL5       Dangerous Soul Collect
        //403: [{}],    //EF_MAGICCRASHER2       Mind Breaker
        
        404: [{    //EF_BOTTOM_SPIDER    Fiber Lock
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var SpiderWeb = require('Renderer/Effects/SpiderWeb');
                this.add(new SpiderWeb(pos, tick), AID);
            }
        }],

        '405_ground': [{ //wall of fog
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var FogEffects = require('Renderer/Effects/Songs').FogEffects;
                FogEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],
        
        406: [{    //EF_SOULBURN    Soul Burn
            type: 'STR',
            file: '\x31\x4f\x3f\x69\x31\x6f', //1O?i1o
            attachedEntity: true
        }],


        407: [{    //EF_SOULCHANGE    Soul Change
            type: 'STR',
            file: '\xbb\xe7\xb6\xf7\x45\x3f\xb0\xfa', //»ç¶÷E?°ú
            attachedEntity: true
        }],

        //408: [{}],    //EF_BABY       Mom, Dad, I love you! (Baby Skill)
        //409: [{}],    //EF_SOULBREAKER2       Meteor Assault
        //410: [{}],    //EF_RAINBOW       Rainbow
        //411: [{}],    //EF_PEONG       Leap
        //412: [{}],    //EF_TANJI2       Like Throw Spirit Sphere
        //413: [{}],    //EF_PRESSEDBODY       Axe Kick
        //414: [{}],    //EF_SPINEDBODY       Round Kick
        //415: [{}],    //EF_KICKEDBODY       Counter Kick
        //416: [{}],    //EF_AIRTEXTURE       (Nothing)
        //417: [{}],    //EF_HITBODY       Flash
        //418: [{}],    //EF_DOUBLEGUMGANG       Warmth Lightning
        //419: [{}],    //EF_REFLECTBODY       Kaite (Visual Effect)

        420: [{    //EF_BABYBODY    Eswoo (Small) (Visual Effect)
            type: 'FUNC',
            attachedEntity: true,
            func: function EffectSmallTransition(entity) {
                var xSize = entity.xSize;
                var ySize = entity.ySize;

                entity.animations.add(function(tick){
                    entity.xSize = xSize + (2.5 - xSize) * (Math.min(tick, 300) / 300);
                    entity.ySize = ySize + (2.5 - ySize) * (Math.min(tick, 300) / 300);

                    return (tick > 300);
                });
            }
        }],


        421: [{    //EF_BABYBODY2    Eswoo (Alt. Small) (Visual Effect)
            type: 'FUNC',
            attachedEntity: true,
            func: function EffectSmall(entity) {
                entity.xSize = 2.5;
                entity.ySize = 2.5;
            }
        }],


        422: [{    //EF_GIANTBODY    Eswoo (Normal) (Visual Effect)
            type: 'FUNC',
            attachedEntity: true,
            func: function EffectBigTransition(entity) {
                var xSize = entity.xSize;
                var ySize = entity.ySize;

                entity.animations.add(function(tick){
                    entity.xSize = xSize + (7.5 - xSize) * (Math.min(tick, 300) / 300);
                    entity.ySize = ySize + (7.5 - ySize) * (Math.min(tick, 300) / 300);

                    return (tick > 300);
                });
            }
        }],


        423: [{    //EF_GIANTBODY2    Eswoo (Alt. Normal) (Visual Effect)
            type: 'FUNC',
            attachedEntity: true,
            func: function EffectBig(entity) {
                entity.xSize = 7.5;
                entity.ySize = 7.5;
            }
        }],

        //424: [{}],    //EF_ASURABODY       Spirit Link (Visual Effect)
        //425: [{}],    //EF_4WAYBODY       Esma Hit (Visual Effect)

        426: [{ //taekwon sprint collision effect    //EF_QUAKEBODY    Sprint Collision (Visual Effect)
            wav:  'effect/\xba\xb9\xc8\xa3\xb0\xdd', //şąČŁ°Ý
            attachedEntity: true
        }],

        //427: [{}],    //EF_ASURABODY_MONSTER       (Nothing)
        //428: [{}],    //EF_HITLINE3       (Nothing)
        //429: [{}],    //EF_HITLINE4       Taekwon Kick Hit 1
        //430: [{}],    //EF_HITLINE5       Taekwon Kick Hit 2
        //431: [{}],    //EF_HITLINE6       Taekwon Kick Hit 3
        //432: [{}],    //EF_ELECTRIC       Solar, Lunar and Stellar Perception (Visual Effect)
        //433: [{}],    //EF_ELECTRIC2       Solar, Lunar and Stellar Opposition (Visual Effect)
        //434: [{}],    //EF_HITLINE7       Taekwon Kick Hit 4
        //435: [{}],    //EF_STORMKICK       Whirlwind Kick
        //436: [{}],    //EF_HALFSPHERE       White Barrier (Unused)
        //437: [{}],    //EF_ATTACKENERGY       White barrier 2 (Unused)
        //438: [{}],    //EF_ATTACKENERGY2       Kaite Reflect Animation
        //439: [{}],    //EF_CHEMICAL3       Flying Side Kick

        440: [{    //EF_ASSUMPTIO2    Assumptio (Animation)
            type: 'STR',
            file: 'asum',
            wav:  'effect/\xbe\xc6\xbc\xfb\xc7\xc1\xc6\xbc\xbf\xc0', //ľĆĽűÇÁĆĽżŔ
            attachedEntity: true
        }],

        //441: [{}],    //EF_BLUECASTING       Comfort Skills Cast Aura
        //442: [{}],    //EF_RUN       Foot Prints caused by Sprint.
        //443: [{}],    //EF_STOPRUN       (Nothing)
        
		444: [{    //EF_STOPEFFECT       Sprint Stop Animation
			wav:  'effect/\x74\x5f\x3f\x3f\xb0\xfa\x3f\x3f\x31', //t_Čż°úŔ˝1
            attachedEntity: true
		}],

        445: [{ //high jump caster    //EF_JUMPBODY    High Jump (Jump)
            wav:  'effect/\x74\x5f\xc8\xb8\xc7\xc7\x32', //t_Č¸ÇÇ2
            attachedEntity: true
        }],

        //446: [{}],    //EF_LANDBODY       High Jump (Return Down)
        //447: [{}],    //EF_FOOT3       Running Left Foot
        //448: [{}],    //EF_FOOT4       Running Right Foot
        //449: [{}],    //EF_TAE_READY       KA-Spell (1st Part)

        450: [{ // Dark cross    //EF_GRANDCROSS2    Darkcross
            
        }],

        //451: [{}],    //EF_SOULSTRIKE2       Dark Strike
        //452: [{}],    //EF_YUFITEL2       Something Like Jupitel Thunder
        //453: [{}],    //EF_NPC_STOP       Paralized
        //454: [{}],    //EF_DARKCASTING       Like Blind
        //455: [{}],    //EF_GUMGANGNPC       Another Warmth Lightning
        //456: [{}],    //EF_AGIUP       Power Up

        457: [{ //flying kick on target    //EF_JUMPKICK    Flying Side Kick (2nd Part)
            wav:  'effect/\x74\x5f\xb3\xaf\xb6\xf3\xc2\xf7\xb1\xe2', //t_łŻ¶óÂ÷±â
            attachedEntity: true
        }],

        //458: [{}],    //EF_QUAKEBODY2       Running/Sprint (running into a wall)
        //459: [{}],    //EF_STORMKICK1       Brown tornado that spins sprite (unused)
        //460: [{}],    //EF_STORMKICK2       Green tornado (unused)
        //461: [{}],    //EF_STORMKICK3       Blue tornado (unused)
        //462: [{}],    //EF_STORMKICK4       Kaupe Dodge Effect
        //463: [{}],    //EF_STORMKICK5       Kaupe Dodge Effect
        //464: [{}],    //EF_STORMKICK6       White tornado (unused)
        //465: [{}],    //EF_STORMKICK7       Purple tornado (unused)
        //466: [{}],    //EF_SPINEDBODY2       Another Round Kick
        //467: [{}],    //EF_BEGINASURA1       Warm/Mild Wind (Earth)
        //468: [{}],    //EF_BEGINASURA2       Warm/Mild Wind (Wind)
        //469: [{}],    //EF_BEGINASURA3       Warm/Mild Wind (Water)
        //470: [{}],    //EF_BEGINASURA4       Warm/Mild Wind (Fire)
        //471: [{}],    //EF_BEGINASURA5       Warm/Mild Wind (Undead)
        //472: [{}],    //EF_BEGINASURA6       Warm/Mild Wind (Shadow)
        //473: [{}],    //EF_BEGINASURA7       Warm/Mild Wind (Holy)
        //474: [{}],    //EF_AURABLADE2       (Nothing)
        //475: [{}],    //EF_DEVIL1       Demon of The Sun Moon And Stars (Level 1)
        //476: [{}],    //EF_DEVIL2       Demon of The Sun Moon And Stars (Level 2)
        //477: [{}],    //EF_DEVIL3       Demon of The Sun Moon And Stars (Level 3)
        //478: [{}],    //EF_DEVIL4       Demon of The Sun Moon And Stars (Level 4)
        //479: [{}],    //EF_DEVIL5       Demon of The Sun Moon And Stars (Level 5)
        //480: [{}],    //EF_DEVIL6       Demon of The Sun Moon And Stars (Level 6)
        //481: [{}],    //EF_DEVIL7       Demon of The Sun Moon And Stars (Level 7)
        //482: [{}],    //EF_DEVIL8       Demon of The Sun Moon And Stars (Level 8)
        //483: [{}],    //EF_DEVIL9       Demon of The Sun Moon And Stars (Level 9)
        //484: [{}],    //EF_DEVIL10       Demon of The Sun Moon And Stars (Level 10)
        //485: [{}],    //EF_DOUBLEGUMGANG2       Mental Strength Lightning but White
        //486: [{}],    //EF_DOUBLEGUMGANG3       Mental Strength Lightning
        //487: [{}],    //EF_BLACKDEVIL       Demon of The Sun Moon And Stars Ground Effect
        //488: [{}],    //EF_FLOWERCAST       Comfort Skills
        //489: [{}],    //EF_FLOWERCAST2       (Nothing)
        //490: [{}],    //EF_FLOWERCAST3       (Nothing)

        491: [{    //EF_MOCHI    Element Potions
            type: 'STR',
            file: '\xc2\xfd\x31\x4f\xb6\xb1', //Âý1O¶±
            attachedEntity: true
        }],


        492: [{    //EF_LAMADAN    Cooking Foods
            type: 'STR',
            file: 'ramadan',
            attachedEntity: true
        }],
        
        493: [{ // edp    //EF_EDP    Enchant Deadly Poison
            wav:  'effect/assasin_cloaking',
            //blinking
            attachedEntity: true
        }],

        //494: [{}],    //EF_SHIELDBOOMERANG2       Throwing Tomahawk
        //495: [{}],    //EF_RG_COIN2       Full Strip Sound

        '496_beforecast': [{
            type: 'FUNC',
            attachedEntity: true,
            func: function(entity, tick) {
                var MagicRing = require('Renderer/Effects/MagicRing');
                this.add(new MagicRing(entity, 2.45, 0.8, 2.80, 'ring_jadu', tick+10000), entity.GID);
            }
        }],

        //497: [{}],    //EF_SLIM       Twilight Alchemy 1
        //498: [{}],    //EF_SLIM2       Twilight Alchemy 2
        //499: [{}],    //EF_SLIM3       Twilight Alchemy 3
        //500: [{}],    //EF_CHEMICALBODY       Player Become Blue with Blue Aura
        //501: [{}],    //EF_CASTSPIN       Chase Walk Animation
        //502: [{}],    //EF_PIERCEBODY       Player Become Yellow with Yellow Aura
        //503: [{}],    //EF_SOULLINK       Soul Link Word
        //504: [{}],    //EF_CHOOKGI2       (Nothing)
        //505: [{}],    //EF_MEMORIZE       Memorize
        //506: [{}],    //EF_SOULLIGHT       (Nothing)

        507: [{ //Authoritative Badge    //EF_MAPAE    Authoritative Badge
            type: 'STR',
            file: 'mapae',
            wav:  'effect/mapae',
            attachedEntity: true
        }],


        508: [{    //EF_ITEMPOKJUK    Fire Cracker
            type: 'STR',
            file: 'itempokjuk',
            attachedEntity: true
        }],


        509: [{    //EF_05VAL    Valentine Day Hearth (Wings)
            type: 'SPR',
            file: '05vallentine',
            attachedEntity: true
        }],

        //510: [{}],    //EF_BEGINASURA11       Champion Asura Strike
        //511: [{}],    //EF_NIGHT       (Nothing)
        //512: [{}],    //EF_CHEMICAL2DASH       Chain Crush Combo
        //513: [{}],    //EF_GROUNDSAMPLE       Area Cast
        //514: [{}],    //EF_GI_EXPLOSION       Really Big Circle
        //515: [{}],    //EF_CLOUD4       Einbroch Fog
        //516: [{}],    //EF_CLOUD5       Airship Cloud
        //517: [{}],    //EF_BOTTOM_HERMODE       (Nothing)
        //518: [{}],    //EF_CARTTER       Cart Termination

        519: [{ //speed potion    //EF_ITEMFAST    Speed Down Potion
            type: 'SPR',
            file: 'fast',
            wav:  'effect/fast',
            attachedEntity: true
        }],

        //520: [{}],    //EF_SHIELDBOOMERANG3       Shield Bumerang
        //521: [{}],    //EF_DOUBLECASTBODY       Player Become Red with Red Aura

        '522_ground': [{ // Gravitation field
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var self = this;
                var GravityEffects = require('Renderer/Effects/Songs').GravityEffects;
                GravityEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        //523: [{}],    //EF_TAROTCARD1       Tarot Card of Fate (The Fool)
        //524: [{}],    //EF_TAROTCARD2       Tarot Card of Fate (The Magician)
        //525: [{}],    //EF_TAROTCARD3       Tarot Card of Fate (The High Priestess)
        //526: [{}],    //EF_TAROTCARD4       Tarot Card of Fate (The Chariot)
        //527: [{}],    //EF_TAROTCARD5       Tarot Card of Fate (Strength)
        //528: [{}],    //EF_TAROTCARD6       Tarot Card of Fate (The Lovers)
        //529: [{}],    //EF_TAROTCARD7       Tarot Card of Fate (The Wheel of Fortune)
        //530: [{}],    //EF_TAROTCARD8       Tarot Card of Fate (The Hanged Man)
        //531: [{}],    //EF_TAROTCARD9       Tarot Card of Fate (Death)
        //532: [{}],    //EF_TAROTCARD10       Tarot Card of Fate (Temperance)
        //533: [{}],    //EF_TAROTCARD11       Tarot Card of Fate (The Devil)
        //534: [{}],    //EF_TAROTCARD12       Tarot Card of Fate (The Tower)
        //535: [{}],    //EF_TAROTCARD13       Tarot Card of Fate (The Star)
        //536: [{}],    //EF_TAROTCARD14       Tarot Card of Fate (The Sun)
        
        //537: [{}],    //EF_ACIDDEMON       Acid Demonstration
        //538: [{}],    //EF_GREENBODY       Player Become Green with Green Aura
        //539: [{}],    //EF_THROWITEM4       Throw Random Bottle
        //540: [{}],    //EF_BABYBODY_BACK       Instant Small->Normal
        //541: [{}],    //EF_THROWITEM5       (Nothing)
        //542: [{}],    //EF_BLUEBODY       KA-Spell (1st Part)
        //543: [{}],    //EF_HATED       Kahii
        //544: [{}],    //EF_REDLIGHTBODY       Warmth Red Sprite
        //545: [{}],    //EF_RO2YEAR       Sound And... PUFF Client Crash :P
        //546: [{}],    //EF_SMA_READY       Kaupe
        //547: [{}],    //EF_STIN       Estin
        //548: [{}],    //EF_RED_HIT       Instant Red Sprite
        //549: [{}],    //EF_BLUE_HIT       Instant Blue Sprite
        //550: [{}],    //EF_QUAKEBODY3       Another Effect like Running Hit
        //551: [{}],    //EF_SMA       Effect Like Estun but with Circle
        //552: [{}],    //EF_SMA2       (Nothing)
        //553: [{}],    //EF_STIN2       Esma
        //554: [{}],    //EF_HITTEXTURE       Large White Cloud
        //555: [{}],    //EF_STIN3       Estun
        //556: [{}],    //EF_SMA3       (Nothing)
        //557: [{}],    //EF_BLUEFALL       Juperos Energy Waterfall (Horizontal)
        //558: [{}],    //EF_BLUEFALL_90       Juperos Energy Waterfall (Vertical)
        //559: [{}],    //EF_FASTBLUEFALL       Juperos Energy Waterfall Fast (Horizontal)
        //560: [{}],    //EF_FASTBLUEFALL_90       Juperos Energy Waterfall Fast (Vertical)
        //561: [{}],    //EF_BIG_PORTAL       Juperos Warp
        //562: [{}],    //EF_BIG_PORTAL2       Juperos Warp
        //563: [{}],    //EF_SCREEN_QUAKE       Earthquake Effect (Juperos Elevator)
        //564: [{}],    //EF_HOMUNCASTING       Wedding Cast
        
        565: [{    //EF_HFLIMOON1    Filir Moonlight Lvl 1
            type: 'STR',
            file: 'moonlight_1',
            attachedEntity: true
        }],


        566: [{    //EF_HFLIMOON2    Filir Moonlight Lvl 2
            type: 'STR',
            file: 'moonlight_2',
            attachedEntity: true
        }],


        567: [{    //EF_HFLIMOON3    Filir Moonlight Lvl 3
            type: 'STR',
            file: 'moonlight_3',
            attachedEntity: true
        }],


        568: [{ //homun?    //EF_HO_UP    Another Job Level Up
            type: 'STR',
            file: 'h_levelup',
            attachedEntity: true
        }],


        569: [{    //EF_HAMIDEFENCE    Amistr Bulwark
            type: 'STR',
            file: 'defense',
            attachedEntity: true
        }],


        570: [{    //EF_HAMICASTLE    Amistr Castling
            type: 'SPR',
            file: '\xc4\x33\x31\x31\xb8\xb5', //Ä311¸µ
            attachedEntity: true
        }],


        571: [{    //EF_HAMIBLOOD    Amistr Bloodlust
            type: 'SPR',
            file: '\x6f\xed\xb7\x97\xb5\x61\xb7\x97\x31\x6f\x41\xae', //oí·—µa·—1oA®
            attachedEntity: true
        }],

        //572: [{}],    //EF_HATED2       Warmth Soul
        //573: [{}],    //EF_TWILIGHT1       Twilight Alchemy 1
        //574: [{}],    //EF_TWILIGHT2       Twilight Alchemy 2
        //575: [{}],    //EF_TWILIGHT3       Twilight Alchemy 3

        576: [{    //EF_ITEM_THUNDER    Box Effect (Thunder)
            type: 'SPR',
            file: 'item_thunder',
            attachedEntity: true
        }],


        577: [{    //EF_ITEM_CLOUD    Box Effect (Cloud)
            type: 'SPR',
            file: 'item_cloud',
            attachedEntity: true
        }],


        578: [{    //EF_ITEM_CURSE    Box Effect (Curse)
            type: 'SPR',
            file: 'item_curse',
            attachedEntity: true
        }],


        579: [{    //EF_ITEM_ZZZ    Box Effect (Sleep)
            type: 'SPR',
            file: 'item_zzz',
            attachedEntity: true
        }],


        580: [{    //EF_ITEM_RAIN    Box Effect (Rain)
            type: 'SPR',
            file: 'item_rain',
            attachedEntity: true
        }],

        //581: [{}],    //EF_ITEM_LIGHT       Box Effect (Sunlight)
        //582: [{}],    //EF_ANGEL3       Another Super Novice/Taekwon Angel

        583: [{    //EF_M01    Warmth Hit
            type: 'SPR',
            file: 'm_ef01',
            attachedEntity: true
        }],


        584: [{    //EF_M02    Full Buster
            type: 'SPR',
            file: 'm_ef02',
            attachedEntity: true,
            direction: true
        }],


        585: [{    //EF_M03    5 Medium Size Explosion
            type: 'SPR',
            file: 'm_ef03',
            attachedEntity: true
        }],


        586: [{    //EF_M04    Somatology Lab Mobs Aura
            type: 'SPR',
            file: 'm_ef04',
            attachedEntity: true
        }],


        587: [{    //EF_M05    Big Purple Flame
            type: 'SPR',
            file: 'm_ef05',
            attachedEntity: true
        }],


        588: [{    //EF_M06    Little Red Flame
            type: 'SPR',
            file: 'm_ef06',
            attachedEntity: true
        }],


        589: [{    //EF_M07    Eswoo
            type: 'SPR',
            file: 'm_ef07',
            attachedEntity: true
        }],

        //590: [{}],    //EF_KAIZEL       Running Stop
        //591: [{}],    //EF_KAAHI       (Nothing)
        //592: [{}],    //EF_CLOUD6       Thanatos Tower Bloody Clouds

        593: [{    //EF_FOOD01    Food Effect (STR)
            type: 'STR',
            file: 'food_str',
            attachedEntity: true
        }],


        594: [{    //EF_FOOD02    Food Effect (INT)
            type: 'STR',
            file: 'food_int',
            attachedEntity: true
        }],


        595: [{    //EF_FOOD03    Food Effect (VIT)
            type: 'STR',
            file: 'food_vit',
            attachedEntity: true
        }],


        596: [{    //EF_FOOD04    Food Effect (AGI)
            type: 'STR',
            file: 'food_agi',
            attachedEntity: true
        }],


        597: [{    //EF_FOOD05    Food Effect (DEX)
            type: 'STR',
            file: 'food_dex',
            attachedEntity: true
        }],


        598: [{    //EF_FOOD06    Food Effect (LUK)
            type: 'STR',
            file: 'food_luk',
            attachedEntity: true
        }],

        //599: [{}],    //EF_SHRINK       Cast Time Sound and Flashing Animation on Player
        //600: [{}],    //EF_THROWITEM6       Throw Venom Knife
        //601: [{}],    //EF_SIGHT2       Sight Blaster
        //602: [{}],    //EF_QUAKEBODY4       Close Confine (Grab Effect)

        603: [{    //EF_FIREHIT2    Spinning fire ball (like 50, but smaller)
            type: 'STR',
            file: 'firehit%d',
            rand: [1, 3],
            attachedEntity: true
        }],


        604: [{    //EF_NPC_STOP2    Close Confine (Ground Effect)
            type: 'SPR',
            file: 'cconfine',
            attachedEntity: true,
            stopAtEnd: true
        }],

        //605: [{}],    //EF_NPC_STOP2_DEL       (Nothing)
        //606: [{}],    //EF_FVOICE       Pang Voice (Visual Effect)
        //607: [{}],    //EF_WINK       Wink of Charm (Visual Effect)

        608: [{    //EF_COOKING_OK    Cooking Success
            type: 'STR',
            file: 'cook_suc',
            attachedEntity: true
        }],


        609: [{    //EF_COOKING_FAIL    Cooking Failed
            type: 'STR',
            file: 'cook_fail',
            attachedEntity: true
        }],

        //610: [{}],    //EF_TEMP_OK       Success
        //611: [{}],    //EF_TEMP_FAIL       Failed

        612: [{    //EF_HAPGYEOK    Korean Words and /no1 Emoticon
            type: 'SPR',
            file: '\xc7\x4f\xb0\xdd\x5f', //ÇO°Ý_
            attachedEntity: true
        },{
            type: 'STR',
            file: 'itempokjuk',
            attachedEntity: true
        }],

        //613: [{}],    //EF_THROWITEM7       Throw Shuriken
        //614: [{}],    //EF_THROWITEM8       Throw Kunai
        //615: [{}],    //EF_THROWITEM9       Throw Fumma Shuriken
        //616: [{}],    //EF_THROWITEM10       Throw Money
        //617: [{}],    //EF_BUNSINJYUTSU       Illusionary Shadow
        //618: [{}],    //EF_KOUENKA       Crimson Fire Bolossom
        //619: [{}],    //EF_HYOUSENSOU       Lightning Spear Of Ice
        //620: [{}],    //EF_BOTTOM_SUITON       Water Escape Technique
        //621: [{}],    //EF_STIN4       Wind Blade
        //622: [{}],    //EF_THUNDERSTORM2       Lightning Crash
        //623: [{}],    //EF_CHEMICAL4       Piercing Shot
        //624: [{}],    //EF_STIN5       Kamaitachi
        //625: [{}],    //EF_MADNESS_BLUE       Madness Canceller
        //626: [{}],    //EF_MADNESS_RED       Adjustment
        //627: [{}],    //EF_RG_COIN3       Disarm (Sound Effect)
        //628: [{}],    //EF_BASH3D5       Dust
        //629: [{}],    //EF_CHOOKGI3       (Nothing)

        630: [{    //EF_KIRIKAGE    Shadow Slash
            type: 'SPR',
            file: '\xb1\xd7\xb8\x32\x41\xda\x6f\x4c\xb1\xe2', //±×¸2AÚoL±â
            attachedEntity: true
        }],


        631: [{ //reverse tatami map unit    //EF_TATAMI    Reverse Tatami Map Unit
            type: 'SPR',
            file: '\xb4\x55\xb4\x55\x31\x49', //´U´U1I
            wav: '\xb4\xd9\xb4\xd9\xb9\xcc\xb5\xda\xc1\xfd\xb1\xe2', //´Ů´ŮąĚµÚÁý±â
            attachedEntity: true
        }],


        632: [{    //EF_KASUMIKIRI    Mist Slash
            type: 'SPR',
            file: '\x33\x45\xb0\x33\x6f\x4c\xb1\xe2', //3E°3oL±â
            attachedEntity: true
        }],


        633: [{    //EF_ISSEN    Final Strike
            type: 'SPR',
            file: '\x41\x49\x31\xb6', //AI1¶
            attachedEntity: true
        }],


        634: [{    //EF_KAEN    Crimson Fire Formation
            type: 'SPR',
            file: '\x45\xad\x3f\xb0\xc1\x6f', //E­?°Áo
            attachedEntity: false
        }],


        635: [{    //EF_BAKU    Dragon Fire Formation
            type: 'STR',
            file: 'fire dragon',
            attachedEntity: false
        }],


        636: [{    //EF_HYOUSYOURAKU    Falling Ice Pillar
            type: 'STR',
            file: 'icy',
            attachedEntity: false
        }],


        637: [{    //EF_DESPERADO    Desperado
            type: 'SPR',
            file: '\xb5\x59\x31\x6f\x41\xe4\xb6\xf3\xb5\xb5', //µY1oAä¶óµµ
            attachedEntity: true
        }],


        638: [{    //EF_LIGHTNING_S    Ground Drift Grenade
            type: 'SPR',
            file: '\xb6\xf3\x41\x49\x41\xae\xb4\xd7\x31\x6f\xc7\xc7\x33\xee', //¶óAIA®´×1oÇÇ3î
            attachedEntity: false
        }],


        639: [{    //EF_BLIND_S    Ground Drift Grenade
            type: 'SPR',
            file: '\x6f\xed\xb6\xf3\x41\xce\xb5\x61\x31\x6f\xc7\xc7\x33\xee', //oí¶óAÎµa1oÇÇ3î
            attachedEntity: false
        }],


        640: [{    //EF_POISON_S    Ground Drift Grenade
            type: 'SPR',
            file: '\x41\xf7\x41\x49\xc1\x3f\x31\x6f\xc7\xc7\x33\xee', //A÷AIÁ?1oÇÇ3î
            attachedEntity: false
        }],


        641: [{    //EF_FREEZING_S    Ground Drift Grenade
            type: 'SPR',
            file: '\xc7\xc1\xb8\xae\xc2\x21\x31\x6f\xc7\xc7\x33\xee', //ÇÁ¸®Â!1oÇÇ3î
            attachedEntity: false
        }],


        642: [{    //EF_FLARE_S    Ground Drift Grenade
            type: 'SPR',
            file: '\xc7\x41\xb7\x31\x33\xee\x31\x6f\xc7\xc7\x33\xee', //ÇA·13î1oÇÇ3î
            attachedEntity: false
        }],


        643: [{    //EF_RAPIDSHOWER    Rapid Shower
            type: 'SPR',
            file: '\xb7\x21\xc7\xc7\xb5\x61\xbb\x3f\x3f\xf6', //·!ÇÇµa»??ö
            attachedEntity: true
        }],


        644: [{    //EF_MAGICALBULLET    Magic Bullet
            type: 'SPR',
            file: '\xb8\x41\xc1\xf6\xc4\x41\x6f\x4f\xb8\xb4', //¸AÁöÄAoO¸´
            attachedEntity: true
        }],


        645: [{    //EF_SPREADATTACK    Spread Attack
            type: 'SPR',
            file: '\x31\x6f\xc7\xc1\xb7\x31\xb5\x61', //1oÇÁ·1µa
            attachedEntity: true,
            direction: true,
        }],


        646: [{    //EF_TRACKCASTING    Tracking (Shown While Casting)
            type: 'STR',
            file: '\x41\xae\xb7\x63\x41\xb7', //A®·cA·
            attachedEntity: true
        }],


        647: [{    //EF_TRACKING    Tracking
            type: 'SPR',
            file: '\x41\xae\xb7\x21\x41\xb7', //A®·!A·
            attachedEntity: true
        }],


        648: [{    //EF_TRIPLEACTION    Triple Action
            type: 'SPR',
            file: '\x41\xae\xb8\xae\xc7\x41\x33\xd7\x31\xc7', //A®¸®ÇA3×1Ç
            attachedEntity: true
        }],


        649: [{    //EF_BULLSEYE    Bull's Eye
            type: 'STR',
            file: '\x6f\x4f\x31\x6f\x33\x41\x41\x49', //oO1o3AAI
            attachedEntity: true
        }],

        //650: [{}],    //EF_MAP_MAGICZONE       Ice Cave Level 4 Circle
        //651: [{}],    //EF_MAP_MAGICZONE2       Ice Cave Level 4 Big Circle
        //652: [{}],    //EF_DAMAGE1       Like Regeneration Number but Red with a Sound
        //653: [{}],    //EF_DAMAGE1_2       Like Regeneration Number but Red
        //654: [{}],    //EF_DAMAGE1_3       Like Regeneration Number but Purple
        //655: [{}],    //EF_UNDEADBODY       Mobs Skill (Change Undead Element)
        //656: [{}],    //EF_UNDEADBODY_DEL       Last animation before Change Undead Element finish
        //657: [{}],    //EF_GREEN_NUMBER       (Nothing)
        //658: [{}],    //EF_BLUE_NUMBER       (Nothing)
        //659: [{}],    //EF_RED_NUMBER       (Nothing)
        //660: [{}],    //EF_PURPLE_NUMBER       (Nothing)
        //661: [{}],    //EF_BLACK_NUMBER       (Nothing)
        //662: [{}],    //EF_WHITE_NUMBER       (Nothing)
        //663: [{}],    //EF_YELLOW_NUMBER       (Nothing)
        //664: [{}],    //EF_PINK_NUMBER       (Nothing)
        //665: [{}],    //EF_BUBBLE_DROP       Little Blue Ball Falling From the Sky

        666: [{  //Earthquake    //EF_NPC_EARTHQUAKE    Earthquake
            type: 'SPR',
            file: '\x33\xee\x31\x6f\xc4\x75\x41\x49\x41\xa9', //3î1oÄuAIA©
            attachedEntity: true
        }],

        //667: [{}],    //EF_DA_SPACE       (Nothing)

        668: [{    //EF_DRAGONFEAR    Dragonfear
            type: 'STR',
            file: 'dragon_h',
            attachedEntity: true
        }],


        669: [{ //wide bleeding    //EF_BLEEDING    Wide Bleeding
            type: 'STR',
            file: 'wideb',
            wav: 'wideb',
            attachedEntity: true
        }],


        670: [{    //EF_WIDECONFUSE    Dragon fear (Visual Effect)
            type: 'STR',
            file: 'dfear',
            attachedEntity: true
        }],

        //671: [{}],    //EF_BOTTOM_RUNNER       The Japan Earth Symbol (like 'Seven Wind Lv1', but on the ground)
        //672: [{}],    //EF_BOTTOM_TRANSFER       The Japan Wind Symbol (like 'Seven Wind Lv2', but on the ground)
        //673: [{}],    //EF_CRYSTAL_BLUE       Map turns Blue (like Soul Link)

        '674_ground': [{ // evil land
            type: 'FUNC',
            attachedEntity: false,
            //file: 'status-curse',
            func: function(pos, tick, AID){
                var self = this;
                var EvillandEffects = require('Renderer/Effects/Songs').EvillandEffects;
                EvillandEffects.forEach(function(effect){
                    self.add(new effect(pos, tick), AID);
                });
            }
        }],

        //675: [{}],    //EF_GUARD3       Like Parrying/Kyrie Eleison barrier but Yellow with small Cross in every barrier piece

        677: [{    //EF_CRITICALWOUND    Critical Wounds/Bleeding Attack
            type: 'STR',
            file: 'cwound',
            attachedEntity: true
        }],
        
        //678: [{}],    //EF_GREEN99_3       White 99 Aura Bubbles
        //679: [{}],    //EF_GREEN99_5       Green Aura (Middle)
        //680: [{}],    //EF_GREEN99_6       Green Aura (Bottom)
        //681: [{}],    //EF_MAPSPHERE       Dimensional Gorge Map Effect
        //682: [{}],    //EF_POK_LOVE       I Love You Banner
        //683: [{}],    //EF_POK_WHITE       Happy White Day Banner
        //684: [{}],    //EF_POK_VALEN       Happy Valentine Day Banner
        //685: [{}],    //EF_POK_BIRTH       Happy Birthday Banner
        //686: [{}],    //EF_POK_CHRISTMAS       Merry Christmas Banner
        //687: [{}],    //EF_MAP_MAGICZONE3       Cast Circle-Like effect 1
        //688: [{}],    //EF_MAP_MAGICZONE4       Cast Circle-Like effect 2
        //689: [{}],    //EF_DUST       Endless Tower Map Effect
        //690: [{}],    //EF_TORCH_RED       Burning Flame (Red)
        //691: [{}],    //EF_TORCH_GREEN       Burning Flame (Green)
        //692: [{}],    //EF_MAP_GHOST       Unknown Aura Bubbles (Small ghosts)
        //693: [{}],    //EF_GLOW1       Translucent yellow circle
        //694: [{}],    //EF_GLOW2       Translucent green circle
        //695: [{}],    //EF_GLOW4       Rotating green light
        //696: [{}],    //EF_TORCH_PURPLE       The same of 690 and 691 but Blue/Purple
        //697: [{}],    //EF_CLOUD7       (Nothing)
        //698: [{}],    //EF_CLOUD8       (Nothing)

        699: [{    //EF_FLOWERLEAF    Fall of powder from the sky and raise of some leaf
            type: 'STR',
            file: 'flower_leaf',
            attachedEntity: true
        }],

        //700: [{}],    //EF_MAPSPHERE2       Big Colored Green Sphere.
        //701: [{}],    //EF_GLOW11       Huge Blue Sphere
        //702: [{}],    //EF_GLOW12       Little Colored Violet Sphere
        //703: [{}],    //EF_CIRCLELIGHT       Light Infiltration with fall of pownder

        704: [{    //EF_ITEM315    Client Error (mobile_ef02.str)
            type: 'STR',
            file: 'mobile_ef02',
            attachedEntity: true
        }],


        705: [{    //EF_ITEM316    Client Error (mobile_ef01.str)
            type: 'STR',
            file: 'mobile_ef01',
            attachedEntity: true
        }],


        706: [{    //EF_ITEM317    Client Error (mobile_ef03.str)
            type: 'STR',
            file: 'mobile_ef03',
            attachedEntity: true
        }],

        //707: [{}],    //EF_ITEM318       Client Crash :P

        708: [{    //EF_STORM_MIN    Storm Gust (same as 89)
            type: 'STR',
            file: 'storm_min',
            wav:  'effect/wizard_stormgust',
            attachedEntity: true
        }],


        709: [{    //EF_POK_JAP    A Firework that split in 4 mini fireworks
            type: 'STR',
            file: 'pokjuk_jap',
            attachedEntity: false
        }],

        //710: [{}],    //EF_MAP_GREENLIGHT       A Sphere like Effect 701 but Green, and a bit more larger
        //711: [{}],    //EF_MAP_MAGICWALL       A big violet wall
        //712: [{}],    //EF_MAP_GREENLIGHT2       A Little Flame Sphere
        //713: [{}],    //EF_YELLOWFLY1       A lot of Very Small and Yellow Sphere
        //714: [{}],    //EF_YELLOWFLY2       (Nothing)
        //715: [{}],    //EF_BOTTOM_BLUE       Little blue Basilica
        //716: [{}],    //EF_BOTTOM_BLUE2       Same as 715

        717: [{    //EF_WEWISH    Christmas Carol (copy of Angelus)
            type: 'STR',
            file: 'angelus',
            wav:  'effect/wewish',
            min:  'jong_mini',
            attachedEntity: true
        }],

        718: [{    //EF_FIREPILLARON2       Judex (Visual Effect)
			wav:  'effect/ab_judex'
		}],
		
        //719: [{}],    //EF_FORESTLIGHT5       Renovatio (light beam)
        //720: [{}],    //EF_SOULBREAKER3       Yellow version of Soul Breaker

        721: [{    //EF_ADO_STR    Adoramus (lightning bolt)
            type: 'STR',
            file: 'ado',
            attachedEntity: true
        }],

        722: [{    //EF_IGN_STR    Ignition Break (big explosion)
            type: 'STR',
            file: '\x41\x49\xb1\xd7\xb4\x49\x31\xc7\x6f\x65\xb7\x31\x41\x49\x41\xa9', //AI±×´I1Çoe·1AIA©
            attachedEntity: true
        }],

        //723: [{}],    //EF_CHIMTO2       Hundred Spear (sound effect)
        //724: [{}],    //EF_WINDCUTTER       Green version of Detecting
        //725: [{}],    //EF_DETECT2       Oratorio (like Detecting)
        //726: [{}],    //EF_FROSTMYSTY       Frost Misty (blue vapor and bubbles)

        727: [{    //EF_CRIMSON_STR    Crimson Rock
            type: 'STR',
            file: 'crimson_r',
            attachedEntity: true
        }],


        728: [{    //EF_HELL_STR    Small fire (part of Hell Inferno)
            type: 'STR',
            file: 'hell_in',
            attachedEntity: true
        }],

        //729: [{}],    //EF_SPR_MASH       Marsh of Abyss (like Close Confine)
        //730: [{}],    //EF_SPR_SOULE       Small, cartoony explosion (part of Soul Expansion)

        731: [{    //EF_DHOWL_STR    Dragon Howling (blinking, expanding circle)
            type: 'STR',
            file: 'dragon_h',
            attachedEntity: true
        }],

        //732: [{}],    //EF_EARTHWALL       Spike from the ground
        //733: [{}],    //EF_SOULBREAKER4       Fluffy Ball flying by

        734: [{    //EF_CHAINL_STR    Chain Lightning
            type: 'STR',
            file: 'chainlight',
            attachedEntity: true
        }],

        //735: [{}],    //EF_CHOOKGI_FIRE       (Nothing)
        //736: [{}],    //EF_CHOOKGI_WIND       (Nothing)
        //737: [{}],    //EF_CHOOKGI_WATER       (Nothing)
        //738: [{}],    //EF_CHOOKGI_GROUND       (Nothing)
        //739: [{}],    //EF_MAGENTA_TRAP       Old Magenta Trap
        //740: [{}],    //EF_COBALT_TRAP       Old Cobald Trap
        //741: [{}],    //EF_MAIZE_TRAP       Old Maize Trap
        //742: [{}],    //EF_VERDURE_TRAP       Old Verdure Trap
        //743: [{}],    //EF_NORMAL_TRAP       White Ranger Trap
        //744: [{}],    //EF_CLOAKING2       Camouflage

        745: [{    //EF_AIMED_STR    Aimed Bolt (crosshairs)
            type: 'STR',
            file: 'aimed',
            attachedEntity: true
        }],


        746: [{    //EF_ARROWSTORM_STR    Arrow Storm
            type: 'STR',
            file: 'arrowstorm',
            attachedEntity: true
        }],


        747: [{    //EF_LAULAMUS_STR    Falling white feathers
            type: 'STR',
            file: 'laulamus',
            attachedEntity: true
        }],


        748: [{    //EF_LAUAGNUS_STR    Falling blue feathers
            type: 'STR',
            file: 'lauagnus',
            attachedEntity: true
        }],


        749: [{    //EF_MILSHIELD_STR    Millennium Shield
            type: 'STR',
            file: 'mil_shield',
            attachedEntity: true
        }],


        750: [{    //EF_CONCENTRATION2    Detonator (blue sparkles)
            type: 'STR',
            file: 'concentration',
            attachedEntity: true
        }],

        //751: [{}],    //EF_FIREBALL2       Releasing summoned warlock spheres
        //752: [{}],    //EF_BUNSINJYUTSU2       Like Energy Coat, but not as dark
        //753: [{}],    //EF_CLEARTIME       Clearance
        //754: [{}],    //EF_GLASSWALL3       Green warp portal (root of Epiclesis)
        //755: [{}],    //EF_ORATIO       Oratio (spinning blue symbol)

        756: [{    //EF_POTION_BERSERK2    Enchant Blade (like Berserk Potion)
            type: 'STR',
            file: '\x31\xf6\x31\xad\x41\xa9', //1ö1­A©
            attachedEntity: true
        }],
        
        //757: [{}],    //EF_CIRCLEPOWER       Third Class Aura (Middle)
        //758: [{}],    //EF_ROLLING1       Rolling Cutter - Spin Count 1
        //759: [{}],    //EF_ROLLING2       Rolling Cutter - Spin Count 2
        //760: [{}],    //EF_ROLLING3       Rolling Cutter - Spin Count 3
        //761: [{}],    //EF_ROLLING4       Rolling Cutter - Spin Count 4
        //762: [{}],    //EF_ROLLING5       Rolling Cutter - Spin Count 5
        //763: [{}],    //EF_ROLLING6       Rolling Cutter - Spin Count 6
        //764: [{}],    //EF_ROLLING7       Rolling Cutter - Spin Count 7
        //765: [{}],    //EF_ROLLING8       Rolling Cutter - Spin Count 8
        //766: [{}],    //EF_ROLLING9       Rolling Cutter - Spin Count 9
        //767: [{}],    //EF_ROLLING10       Rolling Cutter - Spin Count 10
        //768: [{}],    //EF_PURPLEBODY       Blinking
        //769: [{}],    //EF_STIN6       Cross Ripper Slasher (flying knives)
        //770: [{}],    //EF_RG_COIN4       Strip sound
        //771: [{}],    //EF_POISONWAV       Poison sound
        //772: [{}],    //EF_POISONSMOKE       Poison particles
        //773: [{}],    //EF_GUMGANG4       Expanding purple aura (part of Phantom Menace)
        //774: [{}],    //EF_SHIELDBOOMERANG4       Axe Boomerang
        //775: [{}],    //EF_CASTSPIN2       Spinning character sprite
        //776: [{}],    //EF_VULCANWAV       Like Desperado sound effect
        //777: [{}],    //EF_AGIUP2       Faded light from the ground [S]
        //778: [{}],    //EF_DETECT3       Expanding white aura (like Clearance)
        //779: [{}],    //EF_AGIUP3       Faded light from the ground [S]
        //780: [{}],    //EF_DETECT4       Expanding red aura (from Infrared Scan)
        //781: [{}],    //EF_ELECTRIC3       Magnetic Field (purple chains)
        //782: [{}],    //EF_GUARD4       All-around shield [S]
        //783: [{}],    //EF_BOTTOM_BARRIER       Yellow shaft of light
        //784: [{}],    //EF_BOTTOM_STEALTH       White shaft of light
        //785: [{}],    //EF_REPAIRTIME       Upward flying wrenches
        //786: [{}],    //EF_NC_ANAL       Symbol with bleeping sound [S]
        //787: [{}],    //EF_FIRETHROW       Flare Launcher (line of fire)
        //788: [{}],    //EF_VENOMIMPRESS       Venom Impress (green skull)
        //789: [{}],    //EF_FROSTMISTY       Freezing Status Effect (two ancillas)
        //790: [{}],    //EF_BURNING       Burning Status Effect (flame symbol)
        //791: [{}],    //EF_COLDTHROW       Two ice shots
        //792: [{}],    //EF_MAKEHALLU       Upward streaming white particles
        //793: [{}],    //EF_HALLUTIME       Same, but more brief
        //794: [{}],    //EF_INFRAREDSCAN       Infrared Scan (red lasers)

        795: [{    //EF_CRASHAXE    Power Swing (axe crash)
            type: 'STR',
            file: 'powerswing',
            attachedEntity: true
        }],

        //796: [{}],    //EF_GTHUNDER       Spinning blue triangles
        //797: [{}],    //EF_STONERING       Stapo
        //798: [{}],    //EF_INTIMIDATE2       Red triangles (like Intimidate)
        //799: [{}],    //EF_STASIS       Stasis (expanding blue mist) [S]
        //800: [{}],    //EF_REDLINE       Hell Inferno (red lights)
        //801: [{}],    //EF_FROSTDIVER3       Jack Frost unit (ice spikes)
        //802: [{}],    //EF_BOTTOM_BASILICA2       White Imprison
        //803: [{}],    //EF_RECOGNIZED       Recognized Spell
        //804: [{}],    //EF_TETRA       Tetra Vortex [S]
        //805: [{}],    //EF_TETRACASTING       Tetra Vortex cast animation (blinking colors)
        //806: [{}],    //EF_FIREBALL3       Flying by as fast as a rocket
        //807: [{}],    //EF_INTIMIDATE3       Kidnapping sound
        //808: [{}],    //EF_RECOGNIZED2       Like Recognized Spell, but one symbol
        //809: [{}],    //EF_CLOAKING3       Shadowy filter [S]
        //810: [{}],    //EF_INTIMIDATE4       Damp thud sound [S]
        
		811: [{    //EF_STRETCH       Body Painting
			wav: 'effect/bodypaint'
		}],
        
		//812: [{}],    //EF_BLACKBODY       Black expanding aura

        813: [{    //EF_ENERVATION    Masquerade - Enervation
            type: 'STR',
            file: 'enervation',
            attachedEntity: true
        }],


        814: [{    //EF_ENERVATION2    Masquerade - Groomy
            type: 'STR',
            file: 'groomy',
            attachedEntity: true
        }],


        815: [{    //EF_ENERVATION3    Masquerade - Ignorance
            type: 'STR',
            file: 'ignorance',
            attachedEntity: true
        }],


        816: [{    //EF_ENERVATION4    Masquerade - Laziness
            type: 'STR',
            file: 'laziness',
			wav: 'effect/laziness',
            attachedEntity: true
        }],


        817: [{    //EF_ENERVATION5    Masquerade - Unlucky
            type: 'STR',
            file: 'unlucky',
            attachedEntity: true
        }],


        818: [{    //EF_ENERVATION6    Masquerade - Weakness
            type: 'STR',
            file: 'weakness',
            attachedEntity: true
        }],
        
        //819: [{}],    //EF_LINELINK4       (Nothing)
        //820: [{}],    //EF_RG_COIN5       Strip Accessory
        //821: [{}],    //EF_WATERFALL_ANI       Waterfall
        
		822: [{}],    //EF_BOTTOM_MANHOLE       Dimension Door (spinning blue aura)
        
		823: [{    //EF_MANHOLE       in-the-manhole effect
			wav: 'effect/manhole'
		}],
       
	   //824: [{}],    //EF_MAKEFEINT       Some filter
        //825: [{}],    //EF_FORESTLIGHT6       Dimension Door (aura + blue light)
        //826: [{}],    //EF_DARKCASTING2       Expanding black casting anim:
        
		827: [{    //EF_BOTTOM_ANI       Chaos Panic (spinning brown aura)
			wav: 'effect/chaospanic'
		}],
        
		828: [{    //EF_BOTTOM_MAELSTROM       Maelstrom (spinning pink aura)
			wav: 'effect/maelstrom' 
		}],
        
		829: [{    //EF_BOTTOM_BLOODYLUST       Bloody Lust (spinning red aura)
			wav: 'effect/bloodylust'
		}],
        
		//830: [{}],    //EF_BEGINSPELL_N1       Blue aura (Arch Bishop cast animation)
        //831: [{}],    //EF_BEGINSPELL_N2       Blue cone [S]
        //832: [{}],    //EF_HEAL_N       Sonic Wave
        //833: [{}],    //EF_CHOOKGI_N       (Nothing)
        //834: [{}],    //EF_JOBLVUP50_2       Light shooting away circlish
        //835: [{}],    //EF_CHEMICAL2DASH2       Fastness yellow-reddish
        //836: [{}],    //EF_CHEMICAL2DASH3       Fastness yellow-pinkish
        //837: [{}],    //EF_ROLLINGCAST       Casting [S]
        //838: [{}],    //EF_WATER_BELOW       Watery aura
        //839: [{}],    //EF_WATER_FADE       [Client Error]
        //840: [{}],    //EF_BEGINSPELL_N3       Red cone
        //841: [{}],    //EF_BEGINSPELL_N4       Green cone
        //842: [{}],    //EF_BEGINSPELL_N5       Yellow cone
        //843: [{}],    //EF_BEGINSPELL_N6       White cone
        //844: [{}],    //EF_BEGINSPELL_N7       Purple cone
        //845: [{}],    //EF_BEGINSPELL_N8       light-bluish turquoise cone
        //846: [{}],    //EF_WATER_SMOKE       (Nothing)
        //847: [{}],    //EF_DANCE1       Gloomy Day (white/red light rays)
        //848: [{}],    //EF_DANCE2       Gloomy Day (white/blue light rays)
        //849: [{}],    //EF_LINKPARTICLE       (Nothing)
        //850: [{}],    //EF_SOULLIGHT2       (Nothing)
        //851: [{}],    //EF_SPR_PARTICLE       Green mushy-foggy stuff (dull)
        //852: [{}],    //EF_SPR_PARTICLE2       Green mushy-foggy stuff (bright)
        //853: [{}],    //EF_SPR_PLANT       Bright green flower area
        //854: [{}],    //EF_CHEMICAL_V       Blue beam of light with notes
        //855: [{}],    //EF_SHOOTPARTICLE       (Nothing)
        //856: [{}],    //EF_BOT_REVERB       Reverberation (red eighth notes)
        
		857: [{    //EF_RAIN_PARTICLE       Severe Rainstorm (falling red and blue beams)
			wav: 'effect/rainstorm' 
		}],
		
        //858: [{}],    //EF_CHEMICAL_V2       Deep Sleep Lullaby (two red beams and music notes)
        //859: [{}],    //EF_SECRA       Holograph of text (blue)
        
		860: [{     //EF_BOT_REVERB2       Distorted note (blue)
			wav: 'effect/reverberation' 
		}],
        
		//861: [{}],    //EF_CIRCLEPOWER2       Green aura (from Circle of Life's Melody)
        
		862: [{    //EF_SECRA2       Randomize Spell (holograph of text)
			wav: 'effect/ab_ancilla'
		}],
		
        //863: [{}],    //EF_CHEMICAL_V3       Dominion Impulse (two spears of light)
        //864: [{}],    //EF_ENERVATION7       Gloomy Day (colorful lines)
        //865: [{}],    //EF_CIRCLEPOWER3       Blue aura (from Song of Mana)
        
		866: [{    //EF_SPR_PLANT2       Dance with a Warg (Wargs)
			wav: 'effect/\xbf\xf6\xb1\xd7\xbf\xcd\xc7\xd4\xb2\xb2\xc3\xe3\xc0\xbb'
		}],
		
        //867: [{}],    //EF_CIRCLEPOWER4       Yellow aura (from Dance with a Warg)
        //868: [{}],    //EF_SPR_PLANT3       Song of Mana (Violies)
        //869: [{}],    //EF_RG_COIN6       Strip sound [S]
        //870: [{}],    //EF_SPR_PLANT4       Ghostly Succubuses of fire
        //871: [{}],    //EF_CIRCLEPOWER5       Red aura (from Lerad's Dew)
        //872: [{}],    //EF_SPR_PLANT5       Lerad's Dew (Minerals)
        //873: [{}],    //EF_CIRCLEPOWER6       Stargate-wormhole stuff (bright purple)
        //874: [{}],    //EF_SPR_PLANT6       Melody of Sink (Ktullanuxes)
        //875: [{}],    //EF_CIRCLEPOWER7       Stargate-wormhole stuff (bright turquoise)
        //876: [{}],    //EF_SPR_PLANT7       Warcry of Beyond (Garms)
        //877: [{}],    //EF_CIRCLEPOWER8       Stargate-wormhole stuff (white)
        //878: [{}],    //EF_SPR_PLANT8       Unlimited Humming Voice (Miyabi Ningyos)
        //879: [{}],    //EF_HEARTASURA       Siren's Voice (heart-like)
        //880: [{}],    //EF_BEGINSPELL_150       Bluish castish cone
        //881: [{}],    //EF_LEVEL99_150       Blue aura
        //882: [{}],    //EF_PRIMECHARGE       Whirl of fireflies (red)
        //883: [{}],    //EF_GLASSWALL4       Epiclesis (transparent green tree)
        //884: [{}],    //EF_GRADIUS_LASER       Green beam
        //885: [{}],    //EF_BASH3D6       Blue light beams
        //886: [{}],    //EF_GUMGANG5       Blue castish cone
        //887: [{}],    //EF_HITLINE8       Wavy sparks
        //888: [{}],    //EF_ELECTRIC4       Earth Shaker (same as 432)
        //889: [{}],    //EF_TEIHIT1T       Fast light beams
        //890: [{}],    //EF_SPINMOVE       Rotation
        //891: [{}],    //EF_FIREBALL4       Magic shots [S]
        //892: [{}],    //EF_TRIPLEATTACK4       Fastness with hitting sound[S]
        //893: [{}],    //EF_CHEMICAL3S       Blue-white light passing by
        //894: [{}],    //EF_GROUNDSHAKE       (Nothing)
        //895: [{}],    //EF_DQ9_CHARGE       Big wheel of flat light beams
        //896: [{}],    //EF_DQ9_CHARGE2       Still sun shaped lightning aura
        //897: [{}],    //EF_DQ9_CHARGE3       Animated sun shaped lightning aura
        //898: [{}],    //EF_DQ9_CHARGE4       Animated, curvy sun shaped lightning aura
        //899: [{}],    //EF_BLUELINE       White/red light shots from below
        //900: [{}],    //EF_SELFSCROLL       Animated, slow curvy sun shaped lightning aura
        //901: [{}],    //EF_SPR_LIGHTPRINT       Explosion
        //902: [{}],    //EF_PNG_TEST       Floating bedtable texture
        //903: [{}],    //EF_BEGINSPELL_YB       Castish flamey cone
        //904: [{}],    //EF_CHEMICAL2DASH4       Yellow/pink lights passing by
        //905: [{}],    //EF_GROUNDSHAKE2       Expanding circle
		
        906: [{    //EF_PRESSURE2       Shield Press (falling shield)
			wav: 'effect/lg_shieldpress'
		}],
		
        //907: [{}],    //EF_RG_COIN7       Chainy, metalish sound [S]
		
        908: [{    //EF_PRIMECHARGE2       Prestige (sphere of yellow particles)
			wav: 'effect/lg_prestige'
		}],
        
		909: [{    //EF_PRIMECHARGE3       Banding (sphere of red particles)
			wav: 'effect/lg_banding'
		}],
        
		910: [{    //EF_PRIMECHARGE4       Inspiration (sphere of blue particles)
			wav: 'effect/lg_inspiration'
		}],
		
        //911: [{}],    //EF_GREENCASTING       Green castish animation [S]
        //912: [{}],    //EF_WALLOFTHORN       Wall of Thorns unit (green fog cloud)
        //913: [{}],    //EF_FIREBALL5       Magic projectiles
        //914: [{}],    //EF_THROWITEM11       (Nothing)
        //915: [{}],    //EF_SPR_PLANT9       Crazy Weed
        //916: [{}],    //EF_DEMONICFIRE       Demonic Fire
        //917: [{}],    //EF_DEMONICFIRE2       More angry, demonic flames
        //918: [{}],    //EF_DEMONICFIRE3       Fire Insignia (demonic flames)
        //919: [{}],    //EF_HELLSPLANT       Hell's Plant (green snapping plant)

        920: [{    //EF_FIREWALL2    Fire Walk unit
            type: 'STR',
            file: 'firewall_per',
            attachedEntity: true
        }],

        //921: [{}],    //EF_VACUUM       Vacuum Extreme (whirlwind)
        //922: [{}],    //EF_SPR_PLANT10       Psychic Wave
        //923: [{}],    //EF_SPR_LIGHTPRINT2       Poison Buster
        //924: [{}],    //EF_POISONSMOKE2       Poisoning animation
        //925: [{}],    //EF_MAKEHALLU2       Some filter

        926: [{    //EF_SHOCKWAVE2    Electric Walk unit
            type: 'STR',
            file: 'hunter_shockwave_blue',
            attachedEntity: true
        }],

        //927: [{}],    //EF_SPR_PLANT11       Earth Grave (speary roots)
        //928: [{}],    //EF_COLDTHROW2       Ice cloud projectiles
        //929: [{}],    //EF_DEMONICFIRE4       Warmer (field of flames)
        //930: [{}],    //EF_PRESSURE3       Varetyr Spear (falling spear)
        //931: [{}],    //EF_LINKPARTICLE2       (Nothing)
        //932: [{}],    //EF_SOULLIGHT3       Firefly
        //933: [{}],    //EF_CHAREFFECT       [Client Crash]
        //934: [{}],    //EF_GUMGANG6       White, castishly expanding cone
        //935: [{}],    //EF_FIREBALL6       Green magic projectile
        //936: [{}],    //EF_GUMGANG7       Red, castishly expanding cone
        //937: [{}],    //EF_GUMGANG8       Yellow, castishly expanding cone
        //938: [{}],    //EF_GUMGANG9       Dark-red, castishly expanding cone
        //939: [{}],    //EF_BOTTOM_DE2       Blue, conish aura
        //940: [{}],    //EF_COLDSTATUS       Snow flake
        //941: [{}],    //EF_SPR_LIGHTPRINT3       Explosion of red, demonic fire
        //942: [{}],    //EF_WATERBALL3       Expanding, white dome
        //943: [{}],    //EF_HEAL_N2       Green, fluffy projectile
        //944: [{}],    //EF_RAIN_PARTICLE2       Falling gems
        //945: [{}],    //EF_CLOUD9       (Nothing)
        //946: [{}],    //EF_YELLOWFLY3       Floating lights
        //947: [{}],    //EF_EL_GUST       Blue lightning sphere
        //948: [{}],    //EF_EL_BLAST       Two blue lightning spheres
        //949: [{}],    //EF_EL_AQUAPLAY       Flat, spinning diamond
        //950: [{}],    //EF_EL_UPHEAVAL       Circling, planetlike spheres
        //951: [{}],    //EF_EL_WILD_STORM       Three lightning spheres
        //952: [{}],    //EF_EL_CHILLY_AIR       Flat, spinning gem and two lightning spheres
        //953: [{}],    //EF_EL_CURSED_SOIL       Spinning, planetlike spheres
        //954: [{}],    //EF_EL_COOLER       Two lightblue glowing spheres
        //955: [{}],    //EF_EL_TROPIC       Three spinning flame spheres
        //956: [{}],    //EF_EL_PYROTECHNIC       Flame
        //957: [{}],    //EF_EL_PETROLOGY       Spinning planetlike sphere
        //958: [{}],    //EF_EL_HEATER       Two flames

        959: [{    //EF_POISON_MIST    Purple flame
            type: 'STR',
            file: 'poison_mist',
            attachedEntity: true
        }],


        960: [{    //EF_ERASER_CUTTER    Small yellow explosion
            type: 'STR',
            file: 'eraser_cutter',
            attachedEntity: true
        }],

        //961: [{}],    //EF_SILENT_BREEZE       Cartoony whirlwind
        //962: [{}],    //EF_MAGMA_FLOW       Rising fire
        //963: [{}],    //EF_GRAYBODY       Dark filter (like Stone Curse)

        964: [{    //EF_LAVA_SLIDE    Same as 920
            type: 'STR',
            file: 'lava_slide',
            attachedEntity: true
        }],


        965: [{    //EF_SONIC_CLAW    Small white explosion
            type: 'STR',
            file: 'sonic_claw',
            attachedEntity: true
        }],


        966: [{    //EF_TINDER_BREAKER    Bone crack
            type: 'STR',
            file: 'tinder',
            attachedEntity: true
        }],


        967: [{    //EF_MIDNIGHT_FRENZY    Another little explosion
            type: 'STR',
            file: 'mid_frenzy',
            attachedEntity: true
        }],


        975: [{    //EF_VOLCANIC_ASH    
            type: 'STR',
            file: 'vash00',
            attachedEntity: true
        }],


        987: [{    //EF_2011RWC    
            type: 'STR',
            file: 'rwc2011',
            attachedEntity: true
        }],


        988: [{    //EF_2011RWC2    
            type: 'STR',
            file: 'rwc2011_2',
            attachedEntity: true
        }],


        1015: [{    //EF_RUN_MAKE_OK    
            type: 'STR',
            file: 'rune_success',
            attachedEntity: true
        }],


        1016: [{    //EF_RUN_MAKE_FAILURE    
            type: 'STR',
            file: 'rune_fail',
            attachedEntity: true
        }],


        1017: [{    //EF_MIRESULT_MAKE_OK    
            type: 'STR',
            file: 'changematerial_su',
            attachedEntity: true
        }],


        1018: [{    //EF_MIRESULT_MAKE_FAIL    
            type: 'STR',
            file: 'changematerial_fa',
            attachedEntity: true
        }],


        1019: [{    //EF_ALL_RAY_OF_PROTECTION    
            type: 'STR',
            file: 'guardian',
            attachedEntity: true
        }],


        1020: [{    //EF_VENOMFOG    
            type: 'STR',
            file: 'bubble%d_1',
            rand: [1, 4],
            attachedEntity: true
        }],


        1021: [{    //EF_DUSTSTORM    
            type: 'STR',
            file: 'dust',
            attachedEntity: true
        }],


        1029: [{    //EF_DANCE_BLADE_ATK    
            type: 'STR',
            file: 'dancingblade',
            attachedEntity: true
        }],


        1031: [{    //EF_INVINCIBLEOFF2    
            type: 'STR',
            file: 'invincibleoff2',
            attachedEntity: true
        }],


        1033: [{    //EF_DEATHSUMMON    
            type: 'STR',
            file: 'devil',
            attachedEntity: true
        }],


        1040: [{    //EF_GC_DARKCROW    
            type: 'STR',
            file: 'gc_darkcrow',
            attachedEntity: true
        }],


        1042: [{    //EF_ALL_FULL_THROTTLE    
            type: 'STR',
            file: 'all_full_throttle',
            attachedEntity: true
        }],


        1043: [{    //EF_SR_FLASHCOMBO    
            type: 'STR',
            file: 'sr_flashcombo',
            attachedEntity: true
        }],


        1044: [{    //EF_RK_LUXANIMA    
            type: 'STR',
            file: 'rk_luxanima',
            attachedEntity: true
        }],


        1046: [{    //EF_SO_ELEMENTAL_SHIELD    
            type: 'STR',
            file: 'so_elemental_shield',
            attachedEntity: true
        }],


        1047: [{    //EF_AB_OFFERTORIUM    
            type: 'STR',
            file: 'ab_offertorium',
            attachedEntity: true
        }],


        1048: [{    //EF_WL_TELEKINESIS_INTENSE    
            type: 'STR',
            file: 'wl_telekinesis_intense',
            attachedEntity: true
        }],


        1049: [{    //EF_GN_ILLUSIONDOPING    
            type: 'STR',
            file: 'gn_illusiondoping',
            attachedEntity: true
        }],


        1050: [{    //EF_NC_MAGMA_ERUPTION    
            type: 'STR',
            file: 'nc_magma_eruption',
            attachedEntity: true
        }],


        1055: [{    //EF_NPC_CHILL    
            type: 'STR',
            file: 'chill',
            attachedEntity: true
        }],


        1057: [{    //EF_AB_OFFERTORIUM_RING    
            type: 'STR',
            file: 'ab_offertorium_ring',
            attachedEntity: true
        }],


        1062: [{    //EF_HAMMER_OF_GOD    
            type: 'STR',
            file: 'stormgust',
            attachedEntity: true
        }],
        
        
        1111: [{
            type: 'FUNC',
            attachedEntity: true,
            func: function EffectBodyColor(entity) {
                entity._virtueColor[0] = 1.0;
                entity._virtueColor[1] = 0.0;
                entity._virtueColor[2] = 0.0;
                entity._virtueColor[3] = 0.0;
                entity.recalculateBlendingColor();

                entity.animations.add(function(tick){
                    entity._virtueColor[3] = 0.0 + tick/100;
                    entity.recalculateBlendingColor();
                    if(tick > 300) {
                        entity._virtueColor[0] = 1.0;
                        entity._virtueColor[1] = 1.0;
                        entity._virtueColor[2] = 1.0;
                        entity._virtueColor[3] = 1.0;
                        entity.recalculateBlendingColor();
                        return true;
                    }
                });
            }
        }],
        2000: [{
            wav: 'effect/ef_firearrow'
        }, {
            attachedEntity: false,
            delayLate: 450,
            //duplicate: -1,
            file: 'firehit',
            timeBetweenDupli: 150,
            type: 'STR'
        }, {
            alphaMax: 1,
            angle: 80,
            attachedEntity: false,
            blue: 0.1,
            delay: 500,
            delayWav: 500,
            //duplicate: -1,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/icearrow.tga',
            green: 0.8,
            posxEnd: 0,
            posxStart: -2,
            posyEnd: 0,
            posyStart: -2,
            poszEnd: 0,
            poszStart: 20,
            red: 1,
            size: 50,
            timeBetweenDupli: 150,
            type: '3D',
            wav: 'effect/ef_firehit',
            zIndex: 1
        }],
		
		2001: [{
            wav: 'effect/ef_icearrow'
        }, {
            attachedEntity: false,
            delayLate: 300,
            //duplicate: -1,
            file: 'Èå¸°´ÞºûÈ¯»ó2',
            timeBetweenDupli: 150,
            type: 'STR'
        }, {
            alphaMax: 0.7,
            animation: 4,
            attachedEntity: false,
            blue: 1,
            bottomSize: 3,
            delay: 1000,
            delayLate: 300,
            //duplicate: -1,
            fade: false,
            green: 1,
            height: 0.1,
            red: 1,
            rotate: true,
            textureName: 'ring_blue',
            timeBetweenDupli: 150,
            topSize: 5,
            type: 'CYLINDER'
        }, {
            alphaMax: 1,
            angle: 80,
            attachedEntity: false,
            blue: 1,
            delay: 500,
            //duplicate: -1,
            fadeIn: false,
            fadeOut: false,
            file: 'effect/icearrow.tga',
            green: 1,
            posxEnd: 0,
            posxStart: -2,
            posyEnd: 0,
            posyStart: -2,
            poszEnd: 0,
            poszStart: 20,
            red: 1,
            size: 50,
            timeBetweenDupli: 150,
            type: '3D',
            zIndex: 1
        }],
		
		2002: [{
            attachedEntity: false,
            func: function EffectReadyToFight(e) {
                if (e['action'] === e['ACTION']['DIE']) e['setAction']({
                    'action': e['ACTION']['READYFIGHT'],
                    'frame': 0,
                    'repeat': true,
                    'play': false,
                    'next': {
                        'action': e['ACTION']['IDLE'],
                        'frame': 0,
                        'repeat': false,
                        'play': false,
                        'next': true
                    }
                });
                else e['setAction']({
                    'action': e['ACTION']['DIE'],
                    'repeat': false,
                    'play': false,
                    'frame': 0,
                    'next': true
                });
            },
            type: 'FUNC'
        }],
		
		2003: [{
            alphaMax: 1,
            attachedEntity: false,
            delay: 100,
            file: 'À¯ÀúÀÎÅÍÆäÀÌ½º/information/over_gldstg.bmp',
            posz: 4,
            size: 25,
            type: '3D',
            zIndex: 10
        }],
        2004: [{
            alphaMax: 1,
            attachedEntity: false,
            delay: 100,
            file: 'À¯ÀúÀÎÅÍÆäÀÌ½º/information/over_gldstg.bmp',
            posz: 4,
            size: 15,
            type: '3D',
            zIndex: 10
        }],
		
        2222: [{
            type: 'FUNC',
            attachedEntity: true,
            func: function EffectBodyColor(entity) {
                entity._virtueColor[0] = 1.0;
                entity._virtueColor[1] = 1.0;
                entity._virtueColor[2] = 1.0;
                entity._virtueColor[3] = 1.0;
                entity.recalculateBlendingColor();
                var up = true;

                entity.animations.add(function(tick, up){
                    if(up) {
                        entity._virtueColor[0] = 0.0 + tick/100;
                        entity._virtueColor[3] = 0.0 + tick/100;
                        if(entity._virtueColor[0] == 1.0)
                            up = false;
                    }
                    else {
                        entity._virtueColor[0] = 1.0 - tick/100;
                        entity._virtueColor[3] = 1.0 - tick/100;
                        if(entity._virtueColor[0] == 0.0)
                            up = true;
                    }
                    entity.recalculateBlendingColor();
                    /**if(dummy%5 == 0) {
                        entity._virtueColor[0] = 1.0;
                        entity._virtueColor[1] = 1.0;
                        entity._virtueColor[2] = 1.0;
                        entity._virtueColor[3] = 1.0;
                        entity.recalculateBlendingColor();
                        if(dummy == 1000)
                            return true;
                    }*/
                });
            }
        }],
        
        'maximize_power_sounds': [{
            type: 'FUNC',
            attachedEntity: true,
            func: function MaximizePowerSounds(entity) {
                var Eventss = require('Core/Events');
                var Soundd = require('Audio/SoundManager');
                Eventss.setTimeout(function(){ Soundd.play('effect/black_maximize_power_circle.wav'); }, 1 );
                Eventss.setTimeout(function(){ Soundd.play('effect/black_maximize_power_sword.wav'); }, 550 );
                Eventss.setTimeout(function(){ Soundd.play('effect/black_maximize_power_sword.wav'); }, 700 );
                Eventss.setTimeout(function(){ Soundd.play('effect/black_maximize_power_sword_bic.wav'); }, 950 );

            }
        }],
        
        
        'spiral_pierce_color': [{
            type: 'FUNC',
            attachedEntity: true,
            func: function EffectBodyColor(entity) {
                entity._virtueColor[0] = 1.0;
                entity._virtueColor[1] = 1.0;
                entity._virtueColor[2] = 1.0;
                entity._virtueColor[3] = 1.0;
                entity.recalculateBlendingColor();

                entity.animations.add(function(tick){
                
                    if (!entity.cast.display) {     //we don't know cast time here so.. let's hack
                        entity._virtueColor[0] = 1.0;
                        entity._virtueColor[1] = 1.0;
                        entity._virtueColor[2] = 1.0;
                        entity._virtueColor[3] = 1.0;
                        entity.recalculateBlendingColor();
                        return true;
                    }
                        entity._virtueColor[1] = 0.0 + Math.sin(tick / (6 * Math.PI));
                        entity._virtueColor[2] = 0.0 + Math.sin(tick / (6 * Math.PI));
                        entity.recalculateBlendingColor();
                });
            }
        }],        
        
        
        'magic_ring_red': [{
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var Cylinder = require('Renderer/Effects/Cylinder');
                this.add(new Cylinder(pos, 2.45, 0.8, 2.80, 'ring_red', tick), AID);
            }
        }],
        
        'magic_ring_blue': [{
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var Cylinder = require('Renderer/Effects/Cylinder');
                this.add(new Cylinder(pos, 2.45, 0.8, 2.80, 'ring_blue', tick), AID);
            }
        }],
        
        'magic_ring_yellow': [{
            type: 'FUNC',
            attachedEntity: false,
            func: function(pos, tick, AID){
                var Cylinder = require('Renderer/Effects/Cylinder');
                this.add(new Cylinder(pos, 2.45, 0.8, 2.80, 'ring_yellow', tick), AID);
            }
        }],
        
        'white_pulse': [{
            //type: 'FUNC',
            attachedEntity: true
        }],
        
        'yellow_pulse': [{
            //type: 'FUNC',
            attachedEntity: true
        }],
        
        'black_pulse': [{
            //type: 'FUNC',
            attachedEntity: true
        }],
        
        'spear_hit_sound': [{
            wav: '_hit_spear',
            attachedEntity: true
        }],
        
         'enemy_hit_normal1': [{
            wav: '_enemy_hit_normal1',
            attachedEntity: true
        }],
        
        'ef_hit2_sound': [{
            wav: 'effect/ef_hit2',
            attachedEntity: true
        }],

		'ef_greed_sound': [{
            wav: 'effect/ef_entry',
            attachedEntity: true
        }],
		
		'ef_blitzbeat_sound': [{
            wav: 'effect/hunter_blitzbeat',
            attachedEntity: true
        }],
        
		'ef_rush_windmill': [{
            wav: 'effect/\xc7\xb3\xc2\xf7\xb8\xa6\xc7\xe2\xc7\xd8\xb5\xb9\xb0\xdd', //ÇłÂ÷¸¦ÇâÇŘµą°Ý
            attachedEntity: true
        }],
		
		'ef_swing_dance': [{
            wav: 'effect/\xbd\xba\xc0\xae\xb4\xed\xbd\xba\x2e', //˝şŔ®´í˝ş
            attachedEntity: true
        }],
		
		'ef_great_echo': [{
            wav: 'effect/\xbc\xa8\xc5\xcd\xbd\xba\xc5\xe8',
            attachedEntity: true
        }],
		
		'ef_magicpower': [{
            wav: 'effect/\xb8\xb6\xb9\xfd\xb7\xc2\x20\xc1\xf5\xc6\xf8',
            attachedEntity: true
        }],
		
		'ef_sharpshooting': [{
            wav: 'effect/\xbb\xfe\xc7\xc1\xbd\xb4\xc6\xc3',
            attachedEntity: true
        }],
		
		'ef_poemofnetherworld': [{
            wav: 'effect/\xb3\xaa\xb6\xf4\xc0\xc7\xb3\xeb\xb7\xa1',
            attachedEntity: true
        }],
		
		'ef_ancilla': [{
            wav: 'effect/ab_ancilla',
            attachedEntity: true
        }],
		

    };
});
