import {param, validationResult} from "express-validator";
import * as functions from "firebase-functions";
import {Router} from "express";
const metaDataRouter = Router();

metaDataRouter.get("/polygon/:instanceId/:tokenId",
    param("instanceId").not().isEmpty().isNumeric()
        .withMessage("Invalid instance Id value"),
    param("tokenId").not().isEmpty().isNumeric()
        .withMessage("Invalid token Id value"),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
      // @ts-ignore
      const {instanceId, tokenId} = req.params;

      let description;
      description = "This NFT is set as private.";
      description += " The owner of the NFT is the only one";
      description += " capable of revealing the content.";
      functions.logger.info("GET /metadata/polygon/:instanceId/:tokenId");
      return res.status(200).send({
        name: `ArianeePassport #${tokenId}`,
        description: description,
        image: "https://cert.arianee.net/assets/nft-default-metadata.png",
        external_url: "https://arianee.org",
      });
    });

export {metaDataRouter};
